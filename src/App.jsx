import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import MyBookings from "./pages/MyBookings/MyBookings";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/search"
          element={<SearchResults />}
        />

        <Route path="/my-bookings"
        element={<MyBookings />} />
      </Routes>
    
  );
}

export default App;