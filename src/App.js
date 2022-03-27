import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Items from "./components/Items";
import Home from "./components/Home";
import useToken from "./useToken";

function App() {
  const { token } = useToken();
  let shouldRedirect = false;
  if (!token) {
    shouldRedirect = true;
    return <Home />;
  }

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            {/* <Route exact path="/" element={<Home />}></Route> */}
            {/* <Route exact path="/items" element={<Items />}></Route> */}
            <Route
              exact
              path="/"
              element={
                !shouldRedirect ? <Navigate replace to="/items" /> : <Home />
              }
            />
            <Route
              exact
              path="/items"
              element={shouldRedirect ? <Navigate replace to="/" /> : <Items />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
