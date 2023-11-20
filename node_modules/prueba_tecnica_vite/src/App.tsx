import { Home } from "./page/Home";
import DetailRecipes from "./page/DetailRecipes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/DetailsRecipe/:id" element={<DetailRecipes />} />
        <Route index element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
