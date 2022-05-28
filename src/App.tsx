import { Routes, Route, Navigate } from "react-router-dom";
import Locations from './pages/location';
import Residents from './pages/residents';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/location" />} />
      <Route path="/location" element={<Locations />} />
      <Route path="/location/:locationId" element={<Residents />} />
    </Routes>
  )
};

export default App;
