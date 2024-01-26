import { Home } from "../pages/home/Home";
import { NewPost } from "../pages/new-post/NewPost";
import { AllNews } from "../pages/all-news/AllNews";
import { routes } from "./routes/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.default} element={<Home />}></Route>
        <Route path={routes.home} element={<Home />}></Route>
        <Route path={routes.newPost} element={<NewPost />}></Route>
        <Route path={routes.allNews} element={<AllNews />}></Route>
      </Routes>
    </Router>
  );
};
