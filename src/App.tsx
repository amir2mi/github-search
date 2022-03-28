import { Navigate, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";

function App() {
  // const searchValue = useSelector((state: storeProps) => state.search.value);

  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user/:id" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
