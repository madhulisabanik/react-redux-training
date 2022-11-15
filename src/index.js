import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Enquery from './components/Enquery';
import { store } from './app/store';
import { Provider } from 'react-redux';
import FoodItem from './components/foodItem/FoodItemView';
import FoodItemDetailsView from './components/foodItem/FoodItemDetailsView';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/enquery",
    element: <Enquery />
  },
  {
    path: "/food-items",
    element: <FoodItem />
  },
  {
    path: "/food-item/:itemId/:type",
    element: <FoodItemDetailsView />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
