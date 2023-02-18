import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Error from "./Components/Error/Error";
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
        {
          path: "friends",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends />,
        },
        { path: "/users", element: <Users /> },
      ],
    },
    { path: "*", element: <Error /> },
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
