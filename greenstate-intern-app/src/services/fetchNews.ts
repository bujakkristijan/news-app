export const fetchNews = async () => {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/bujakkristijan/news-api/db",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
