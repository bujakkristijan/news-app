import { useNewsState } from "../../store/newsPostStore";

export const AllNews = () => {
  const { newsPosts, removeAllNewsPosts } = useNewsState();

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
      <button onClick={removeAllNewsPosts}>REMOVE ALL</button>
    </div>
  );
};
