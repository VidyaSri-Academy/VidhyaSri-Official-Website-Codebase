
import { Outlet } from "react-router";
import Header from "./components/layout/Header";
import { useEffect } from "react";
import Footer from "./components/layout/Footer";
import "./App.css";


function App() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <main>
      <nav>
        <Header />
      </nav>
      
      <Outlet />

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
