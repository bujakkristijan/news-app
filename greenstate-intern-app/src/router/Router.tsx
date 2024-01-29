import { Home } from "../pages/home/Home";
import { NewPost } from "../pages/new-post/NewPost";
import { AllNews } from "../pages/all-news/AllNews";
import { routes } from "./routes";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../layout/Layout";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.root} element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path={routes.newPost} element={<NewPost />}></Route>
      <Route path={routes.allNews} element={<AllNews />}></Route>
    </Route>
  )
);
