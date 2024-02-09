export const fetchAllNewsAPI = async () => {
    try {
      const response = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_37905255130db5777238d8fc27655d2437859&country=au,us&image=1",
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching news:", error);
      throw error;
    }
  };
  