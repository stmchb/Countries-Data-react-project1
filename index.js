import { createRoot } from "react-dom/client";
import App from './App.js'
import { ContactUs } from "./components/Contact.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.js";
import Error from "./components/Error.js";
import CountryDetail from "./components/CountryDetail.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/:country",
        element: <CountryDetail />
      },

    ],
  },
]
);

const root = createRoot(document.querySelector('#root'))

root.render(<>
  <RouterProvider
    router={router} />
</>)