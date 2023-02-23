import { useState, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PreLoading from "./components/PreLoading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <Wrapper>
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
