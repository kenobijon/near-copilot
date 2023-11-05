import { AIStream, OpenAIStreamCallbacks } from "ai";

export interface MendableStreamCallbacks extends OpenAIStreamCallbacks {
  onMessage?: (data: string) => Promise<void>;
  onLinksReceived?: (links: string[]) => Promise<void>;  // Add this line
}
let sourcesChunk: any = null;

function toMarkdownNumberedList(l: string[]) {
  let markdownString = '\n Verified Sources: \n';
  for (let i = 0; i < l.length; i++) {
    markdownString += `${i + 1}. [${l[i]}](${l[i]})\n`;
  }
  return markdownString;
}

function parseMendableStream(callbacks?: MendableStreamCallbacks): (data: string) => string | void {
  return (data) => {
    const parsedData = JSON.parse(data);
    const chunk = parsedData.chunk;
    console.log("CHUNK: ", chunk);
    // TODO: handle source and message_id to provide sources to the users
    // More info here: https://docs.mendable.ai/mendable-api/chat
    if (chunk === '<|source|>') {
      let sources = parsedData.metadata;
      let links = sources.map((item: { link: string }) => item.link);
      console.debug(links);
      sourcesChunk = links; // set the sourcesChunk
      if (callbacks?.onLinksReceived) {
        callbacks.onLinksReceived(links);
      }
      return;
    } else if (chunk === '<|message_id|>') {
      let response_message_id = parsedData.metadata
      console.debug("MSG ID: ", response_message_id);
      // #return response_message_id;

      let s = toMarkdownNumberedList(sourcesChunk);
      let id = (response_message_id.toString());

      let end_chunk = id + s;
      return end_chunk;
    }
    else {
      return chunk;
    }

  };
}

export async function MendableStream(
  data: any,
  callbacks?: MendableStreamCallbacks
) {
  const url = "https://api.mendable.ai/v0/mendableChat";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "text/event-stream",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Response error: " + (await response.text()));
  }

  return AIStream(response, parseMendableStream(), callbacks);
}
