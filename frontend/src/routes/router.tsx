import { createBrowserRouter } from "react-router-dom";
import { PortfoliosPage } from "../pages/Portfolio";
import { RootLayout } from "../components/Layout";
import { AssetsPage } from "../pages/Asset/AssetsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/portfolios",
        element: <PortfoliosPage />,
      },
      {
        path: "/portfolios/:portfolioId/assets",
        element: <AssetsPage />,
      },
    ],
  },
]);
