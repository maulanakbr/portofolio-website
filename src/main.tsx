import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "swiper/swiper-bundle.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Logo from "./assets/logo.svg";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href={Logo} />
        <title>Maulana Akbar Yudistika's Site</title>
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
