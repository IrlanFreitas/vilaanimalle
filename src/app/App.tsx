import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";
import { Analytics } from '@vercel/analytics/next';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}
