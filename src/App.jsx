import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import useAuthCheck from "./hooks/useAuthCheck";
import Favicon from "react-favicon";
import Spinner from "./components/Spinner/Spinner";
import { Helmet } from "react-helmet";

export default function App() {
  const authChecked = useAuthCheck();

  if (!authChecked) {
    return <Spinner />;
  }

  return (
    <>
      <Favicon url="/images/logo/favicon.png" />
      <Helmet>
        <meta charSet="utf-8" />
        <title>BeautyQueen - Your Trustes Online Shop</title>
        <link rel="canonical" href="" />
        <meta name="description" content="BeautyQueen" />
      </Helmet>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
