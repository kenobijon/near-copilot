"use server";

import { MessageRating } from "@/types";

export const rateMessage = async ({
    id: message_id,
    rating_value,
}: MessageRating) => {
    const url = "https://api.mendable.ai/v0/rateMessage";


    console.log("Actions: ", url);
    const data = {
        api_key: process.env.MENDABLE_API_KEY,
        message_id,
        rating_value,
    };

    console.log("Rate Data: ", data);
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return response.ok;
    } catch (error) {
        return false;
    }
};
