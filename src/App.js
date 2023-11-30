import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './container/commonComponents/Navbar';
import OrdersPage from './container/OrdersPage';
import NoDataFound from './container/commonComponents/NoDataFound';

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<OrdersPage />} />
        <Route path="*"  element={<NoDataFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;

