import React, { useState, useEffect } from "react";
import { Navbar } from "./components/pageComponents/Navbar";
import Content from "./components/pageComponents/Content";
import About from "./components/pageComponents/About";
import Resume from "./components/pageComponents/Resume";
import ScrollToTopButton from "./components/pageComponents/ScrollTop";
import Contact from "./components/pageComponents/Contact";
import Projects from "./components/pageComponents/Projects";
import Footer from "./components/pageComponents/Footer";
import NavbarIcon from "./components/layerComponents/NavbarIcon";
import PreLoadingScreen from "./components/layerComponents/PreLoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoadingScreen />
      ) : (
        <>
            <Navbar />
            <Content />
            <About />
            <Resume />
            <Projects />
            <Contact />
            <ScrollToTopButton />
            <Footer />
            <NavbarIcon />
        </>
      )}
    </>
  );
}

export default App;
