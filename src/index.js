import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <Switch>
        <Route path="/services/:id">
          <ServiceDetails />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/clients/:id">
          <ClientDetailsPage />
        </Route>
        <Route path="/clients">
          <ClientsPage />
        </Route>
        <Route exact path="/">
          <ServicesPage />
        </Route>
      </Switch> */}