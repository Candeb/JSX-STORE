import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { ForgotPassword } from '../pages/ForgotPassword/ForgotPassword';

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
    </ReactDomRoutes>
  );
}

export default Routes;
