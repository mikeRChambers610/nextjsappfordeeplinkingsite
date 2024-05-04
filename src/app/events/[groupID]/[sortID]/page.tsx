// File: src/app/events/[groupID]/[sortID]/page.server.tsx
import React from 'react';

// Define the structure of the expected params
interface RouteParams {
  groupID: string;
  sortID: string;
}

// This component now accepts HTML content directly
const EventPage: React.FC<{ htmlContent: string }> = ({ htmlContent }) => {
  // Use dangerouslySetInnerHTML to inject the HTML content received from the API
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

// Function to fetch event data from an API
async function fetchData(groupID: string, sortID: string): Promise<string> {
  const url = `https://q0ekxtr8l3.execute-api.us-east-1.amazonaws.com/v1/events?groupID=${groupID}&sortID=${sortID}`;
  console.log(`Fetching data for groupID: ${groupID}, sortID: ${sortID}`);
  const response = await fetch(url);

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Failed fetch response:', errorBody);
    throw new Error(`Failed to fetch data: Server responded with status ${response.status}`);
  }

  const htmlContent = await response.text();
  console.log(`Received HTML content for groupID: ${groupID}, sortID: ${sortID}`);
  return htmlContent;
}

// Fetch and render the page on the server side using the HTML content
export default async function ServerRenderedEventPage({ params }: { params: RouteParams }) {
  const { groupID, sortID } = params;

  try {
    const htmlContent = await fetchData(groupID, sortID);
    return <EventPage htmlContent={htmlContent} />;
  } catch (error) {
    const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
    console.error('Failed to fetch:', message);
    return <div>Error loading content: {message}</div>;
  }
}
