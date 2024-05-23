import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";


import Home from './routes/home/home-component';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
=======
>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d
import Navigation from './routes/navigation/navigation-component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop-component';
import Checkout from './routes/checkout/checkout.component';
<<<<<<< HEAD

=======
import { checkUserSession } from "./store/user/user.action";
>>>>>>> 60a930f1d46d813b0516bd6b5c04b3f46a51dd2d

const App = ()  => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch]);

  return (
    <Routes>
    <Route path='/' element={ <Navigation />}>
      <Route index element = {<Home />} />
        <Route path='shop/*' element = {<Shop />} />
        <Route path='auth' element = {<Authentication />} />
        <Route path='checkout' element = {<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
