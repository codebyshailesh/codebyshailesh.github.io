import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* //routing */}
      <BrowserRouter>
        <Routes>
          {/* for home page "/" means homepage */}
          <Route path="/" element={<Home />} />
          {/* all the paths that are not defined are not-found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
