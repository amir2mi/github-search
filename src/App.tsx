import { Navigate, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import UserPage from "./pages/User";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
