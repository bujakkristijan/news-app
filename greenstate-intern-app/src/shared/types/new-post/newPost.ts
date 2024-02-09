export type NewPostDataWithDate = {
  id: string;
  title: string;
  description: string;
  url: string;
  date: string;
};

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
