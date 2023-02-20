import { useState, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PreLoading from "./components/PreLoading";
import { Helmet } from "react-helmet";
import Logo from "./assets/logo.svg";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href={Logo} />
        <title>Maulana Akbar Yudistika's Site</title>
      </Helmet>
      {isLoading ? (
        <PreLoading />
      ) : (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )}
    </Wrapper>
  );
}

export default App;
