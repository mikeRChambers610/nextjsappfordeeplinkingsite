// File: src/app/events/[groupID]/[sortID]/page.server.tsx
import React from 'react';

interface RouteParams {
  groupID: string;
  sortID: string;
}

interface EventPageProps {
  htmlContent: string;
}

// This is a plain functional component to display HTML content
const EventPage: React.FC<EventPageProps> = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

// Function to fetch event data from an API
async function fetchData(groupID: string, sortID: string): Promise<string> {
  const url = `https://q0ekxtr8l3.execute-api.us-east-1.amazonaws.com/v1/events?groupID=${groupID}&sortID=${sortID}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: Server responded with status ${response.status}`);
  }

  return response.text();
}

interface ServerRenderedEventPageProps {
  params: RouteParams;
}

// Server-side function that directly returns the component with fetched data
export async function getServerComponent(props: ServerRenderedEventPageProps) {
  const { groupID, sortID } = props.params;
  try {
    const htmlContent = await fetchData(groupID, sortID);
    return <EventPage htmlContent={htmlContent} />;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Failed to fetch:', errorMessage);
    return <div>Error loading content: {errorMessage}</div>;
  }
}

export default getServerComponent;
