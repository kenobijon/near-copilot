# NEAR Founder Co-Pilot

Founder Co-Pilot is a chatbot created for founder and developer support building on NEAR!

## Getting Started

First, create a Mendable account at [https://mendable.ai](https://mendable.ai), ingest your data and grab your API key.

Add your .env file with your Mendable API key and Firebase details:

```bash
NEXT_PUBLIC_MENDABLE_BASE_URL = https://api.mendable.ai/v0/
MENDABLE_API_KEY=YOUR_MENDABLE_API_KEY
REACT_APP_API_KEY=YOUR_API_KEY
REACT_APP_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_DATABASE_URL=YOUR_DATABASE_URL
REACT_APP_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_APP_ID=YOUR_APP_ID
REACT_APP_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
```

Then, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
