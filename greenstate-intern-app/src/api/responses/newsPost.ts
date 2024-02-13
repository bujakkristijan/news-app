export type NewsPost = {
  title: string;
  description: string;
  image_url: string;
  pubDate: string;
  article_id: string;
};

export type NewsPostResponse = {
  results: NewsPost[];
};
