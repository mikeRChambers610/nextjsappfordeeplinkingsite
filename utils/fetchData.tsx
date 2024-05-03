// src/utils/fetchData.ts

export async function fetchData(url: string): Promise<string> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return JSON.stringify(data);
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }
  