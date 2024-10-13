import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TrackOrder from './components/TrackOrder.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
const router = createBrowserRouter([
{
    path: "/",
    element: <App/>
  },
  {
    path: "/track/:trackingNumber",
    element: <TrackOrder/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
