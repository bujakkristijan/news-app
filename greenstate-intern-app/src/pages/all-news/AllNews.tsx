import { useNewsStore } from "../../store/NewsPostStore";

export const AllNews = () => {
  const { newsPosts } = useNewsStore();
  console.log("News Posts: ", newsPosts);
  return (
    <div>
      {newsPosts.map((post, index) => (
        <div key={index}>
          <label>
            Title: {post.title}, Description: {post.description}, URL:{" "}
            {post.url}
          </label>
        </div>
      ))}
    </div>
  );
};
