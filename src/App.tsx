import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
