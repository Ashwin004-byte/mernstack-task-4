import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
<nav
  style={{
    background: "linear-gradient(to right, #2563eb, #7c3aed)",
    padding: "20px 50px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    boxShadow: "0px 5px 15px rgba(0,0,0,0.2)"
  }}
>

  <h1
    style={{
      color: "white",
      fontSize: "30px",
      fontWeight: "bold",
      letterSpacing: "1px"
    }}
  >
    React Router App
  </h1>

  <div
    style={{
      display: "flex",
      gap: "60px"
    }}
  >

    <Link
      to="/"
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "20px",
        fontWeight: "600",
        transition: "0.3s"
      }}
    >
      Home
    </Link>

    <Link
      to="/about"
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "20px",
        fontWeight: "600",
        transition: "0.3s"
      }}
    >
      About
    </Link>

    <Link
      to="/contact"
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "20px",
        fontWeight: "600",
        transition: "0.3s"
      }}
    >
      Contact
    </Link>

  </div>

</nav>

      <div
        style={{
          minHeight: "calc(100vh - 80px)",
          background: "linear-gradient(to right, #f8fafc, #dbeafe)",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          textAlign: "center"
        }}
      >

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;