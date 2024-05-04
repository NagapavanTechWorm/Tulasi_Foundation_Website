import {RouterProvider} from "react-router-dom";
import router from '../src/Route/Route';
import { AppProvider } from "./ContextApi/AppProvider";

export const App = ()=>{
  return (
    <AppProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppProvider>
  )
}

