import { useCallback } from 'react';

const useClient = (): { fetch: (url: string) => Promise<Response> } => {
  const fetch = useCallback(async (url: string): Promise<Response> => {
    try {
      const response = await fetch(url); // Here's likely where the error occurs
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response;
    } catch (error) {
      console.error('Fetch error:', error);
      throw new Error('Failed to fetch data');
    }
  }, []);

  return { fetch };
};

export default useClient;
