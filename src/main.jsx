import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom"
import Root from './root';
import Login from './components/login/login';
import Home from './components/pages/Home/home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[{
      path:"/",
      element:<Home></Home>
    },{
      path:"/login",
      element:<Login></Login>
    }]
  
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>

 </RouterProvider>
)
