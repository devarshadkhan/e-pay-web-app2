import { store } from "@/features/app/store";
import "@/styles/globals.css";
import { Children, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tabs/style/react-tabs.css";
import Footer from "@/components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header/Header";
import Layout from "@/layout/Layout";
import { useRouter } from "next/router";
import LoginLayout from "@/layout/LoginLayout";
import { HydrationProvider, Client } from "react-hydration-provider";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.css");
    import("bootstrap/dist/js/bootstrap.js");
    import("bootstrap-icons/font/bootstrap-icons.css");
  }, []);
  const hideHeaderOnPages = [
    "/auth/login/login",
    "/auth/login/email",
    "/auth/login/phone",
  ];

  const router = useRouter();

  function getLayout(route) {
    // Define which layout to use based on the route
    if (hideHeaderOnPages.includes(route)) {
      return LoginLayout;
    } else {
      return Layout;
    }
  }
  const CustomLayout = getLayout(router.pathname);

  return (
    <>
      <HydrationProvider>
        <Client>
          <Provider store={store}>
            <CustomLayout>
              {/* {renderLayout(<Component {...pageProps} />)} */}
              {/* {!hideHeaderOnPages.includes(router.pathname) && <Header />} */}

              <ToastContainer />
              <Component {...pageProps} />
              {/* {!hideHeaderOnPages.includes(router.pathname) && <Footer />} */}
            </CustomLayout>
          </Provider>
        </Client>
      </HydrationProvider>
    </>
  );
}

// import { store } from "@/features/app/store";
// import "@/styles/globals.css";
// import { useEffect } from "react";
// import "react-phone-input-2/lib/style.css";
// import { Provider } from "react-redux";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "react-tabs/style/react-tabs.css";
// import Footer from "@/components/Footer/Footer";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Header from "@/components/Header/Header";
// import { useRouter } from "next/router";
// export default function App({ Component, pageProps }) {
//   useEffect(() => {
//     import("bootstrap/dist/css/bootstrap.css");
//     import("bootstrap/dist/js/bootstrap.js");
//     import("bootstrap-icons/font/bootstrap-icons.css");
//   }, []);

//   const router = useRouter();
//   if(router.pathname === "/auth/login/login" || "/auth/login/email" || "/auth/login/phone")
//   return (

//     <Provider store={store}>
//     {/* <Header /> */}
//     <ToastContainer />
//     <Component {...pageProps} />
//     {/* <Footer /> */}
//   </Provider>

//   )
//   else {
//       return (
//         <Provider store={store}>
//         <Header />
//         <ToastContainer />
//         <Component {...pageProps} />
//         <Footer />
//       </Provider>
//       )
//   }
//   return (
//     <>    </>
//   );
// }
