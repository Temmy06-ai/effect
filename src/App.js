import logo from "./logo.svg";
import "./App.css";
import Fetch from "./Fetch";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import EachUsers from "./EachUsers";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="" element={<Fetch />} />
        <Route path=":userId" element={<EachUsers />} />
        {/* <Route path="dashboard" element={<Dashboard />} />
        <Route path="about" element={<About />} /> */}
      </Route>
    )
  );

  return (
    <div className="Appp">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
