// src/app/events/[groupID]/[sortID]/page.tsx

"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from 'react';

const Events = () => {
  const [data, setData] = useState<string | null>(null); // Specify the type annotation for data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://q0ekxtr8l3.execute-api.us-east-1.amazonaws.com/v1/events?groupID=87ea0c82-0d15-4e4b-b8d9-ab0daf2fcb3f&sortID=2023-06-22T22:02:16.063Z4cbfaaa8-7cbc-4b87-bb9f-c0fc17e94540');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const responseData = await response.text();
        setData(responseData);
      } catch (error: any) { // Use a type assertion to inform TypeScript about the type of error
        console.error('Failed to fetch:', error.message);
        setData('Failed to load data'); // Handle the string value here
      }
    };

    fetchData();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: data || '' }} />
  );
};

export default Events;
