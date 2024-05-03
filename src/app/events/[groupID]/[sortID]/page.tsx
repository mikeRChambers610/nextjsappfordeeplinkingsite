// Events.tsx
"use client"; // This is a client component
// import useAppRouter from next/navigation
// Import usePathname from next/navigation
// Import useClient and usePathname from next/navigation
import useClient from '../../../hooks/useClient';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Events = () => {
  const [htmlContent, setHtmlContent] = useState<string>(''); // Initialize with an empty string
  const { fetch } = useClient(); // Destructure fetch function from useClient for API requests
  const pathname = usePathname(); // Use the usePathname hook to get the current pathname

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parts = pathname.split('/'); // Split the pathname into parts
        const groupID = parts[2]; // Extract the groupID from the pathname
        const sortID = parts[3]; // Extract the sortID from the pathname
        if (!groupID || !sortID) {
          throw new Error('GroupID or SortID not found in pathname');
        }

        console.log("HERE NOW")
          console.log(groupID)
          console.log(sortID)
        const response = await fetch(`https://q0ekxtr8l3.execute-api.us-east-1.amazonaws.com/v1/events?groupID=${groupID}&sortID=${sortID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const responseData = await response.text();
        setHtmlContent(responseData); // Set the HTML content*/
      } catch (error: any) {
        console.error('Failed to fetch:', error.message);
        setHtmlContent('Failed to load data'); // Handle the string value here
      }
    };

    fetchData();
  }, [pathname, fetch]); // Add pathname and fetch as dependencies

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Events;
