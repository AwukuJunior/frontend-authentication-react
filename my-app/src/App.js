import './App.css';
import LogInPage from './components/LogInPage.js';
import SignUp from './components/SignUp.js';
import LoggedIn from './components/LoggedIn.js';
import ForgotPassword from './components/ForgotPassword.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<LogInPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/login" element={<LoggedIn/>} />
      {/* Add other routes here */}
    </Routes>
  </Router>
  );
}
export default App;
