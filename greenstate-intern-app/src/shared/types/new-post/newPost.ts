export type NewsPostPublicAPI = {
  title: string;
  description: string;
  image_url: string;
  pubDate: string;
  article_id: string;
};

export type NewsPostPublicAPIResponse = {
  results: NewsPostPublicAPI[];
};
