import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { LoginPage } from "../auth";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../heroes";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";
import { HomePage } from "../heroes/components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <HeroesRoutes />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dc",
        element: <DcPage />,
      },
      {
        path: "/marvel",
        element: <MarvelPage />,
      },
      {
        path: "/hero/:heroId",
        element: <HeroPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/*",
        element: <MarvelPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <PublicRoute> <LoginPage /> </PublicRoute> ,
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={(<PrivateRoutes >

//         <Route path="/" element={<HeroesRoutes />}>
//           <Route path="/dc" element={<DcPage />} />
//           <Route path="/marvel" element={<MarvelPage />} />
//           <Route path="/search" element={<SearchPage />} />
//           <Route path="/hero/:heroId" element={<HeroPage />} />
//         </Route>
//       </Route>
//       </PrivateRoutes>)}>
//       <Route path="/login" element={<LoginPage />} />
//     </>
//   )
// );

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
