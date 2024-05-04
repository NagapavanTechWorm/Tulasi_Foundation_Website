import {createBrowserRouter,} from "react-router-dom";
import { Home,About,Contact,Gallery,Donate ,Landing} from "../Pages";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[{
          index:true,
          element:<Landing/>
      },
      {
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      },{
        path:"/gallery",
        element:<Gallery/>
      },{
        path:"/donate",
        element:<Donate/>
      }
    ]
    }
  ]);


  export default router;