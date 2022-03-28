import { Navigate, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import AboutPage from "./pages/About";

function App() {
  // const searchValue = useSelector((state: storeProps) => state.search.value);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/user/:id" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
