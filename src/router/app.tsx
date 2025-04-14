import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navigation/navbar";
import HomePage from "../pages/homepage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
