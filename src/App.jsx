import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Welcome from './pages/Welcome';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";

import './styles/main.css';

const routerConfig = createBrowserRouter([
{
  path: '/',
  element: <Welcome />, // начальная страница
},
{
  path: '/step-one',
  element: <StepOne />,
},
{
  path: '/step-two',
  element: <StepTwo />,
},
{
  path: '/step-three',
  element: <StepThree />,
},
{
  path: '/step-four',
  element: <StepFour />,
},
{
  path: '/thanks',
  element: <Thanks />,
},
])

function App() {
  return (
    
      <div className="App">

        {/* <Welcome />
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
        <Thanks /> */}

        <RouterProvider router={routerConfig} />
      </div>
  );
}

export default App;
