import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Friends from "./Components/Friends/Friends";
import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "friends", element: <Friends /> },
        { path: "/users", element: <Users /> },
      ],
    },
    { path: "*", element: <h1>404 Not Found</h1> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
