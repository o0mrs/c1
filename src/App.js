import {
  Routes,
  Route,
  
} from "react-router-dom";
import Auth from "./com/auth";
import Home from "./com/home";

function App() {
  return (
<>

<Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
      </Routes>
  </>
  );
}

export default App;
