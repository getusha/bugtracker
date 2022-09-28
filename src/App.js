import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import HomePage from "./Components/Pages/Homepage";
import NewAccount from "./Components/Pages/NewAccount";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/">
            <Route path="" element={<HomePage />} />
            <Route path="/register" element={<NewAccount />} />
            <Route path="dash/" >
              <Route path="" element={<Dashboard />} />
              
            </Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
