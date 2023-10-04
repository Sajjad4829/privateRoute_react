import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom"
import Root from './root';
import Home from './components/pages/home/home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[{
      path:"/",
      element:<Home></Home>
    }]
  
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>

 </RouterProvider>
)
