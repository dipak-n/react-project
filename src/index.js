import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import ListView from './ListView/ListView';
import ListDetail from './ListView/ListDetail';
import Authentication from './authentication';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <Header />
      <div className="wrapper">
        {/* <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/listview"} component={ListView} />
        <Route path={"/listdetail/:id"} component={ListDetail} />
        <Route component={ErrorPage} />
      </Switch> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact  path={"/listview"} element={<ListView />} />
          <Route exact path={"/listdetail/:id"} element={<ListDetail />} />
          <Route exact path="/auth" element={<Authentication />} />
          <Route exact path="/login" element={<Login />} />
          <Route element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
