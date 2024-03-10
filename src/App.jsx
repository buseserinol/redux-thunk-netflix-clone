import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="p-5 md:p-10 lg:p-15 xl:p-20">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
