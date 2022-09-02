import {
  Routes,
  Route,
  
} from "react-router-dom";
import Signup from "./com/signup";
import Home from "./com/home";

function App() {

  return (
<>

<Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/auth" element={<Signup />}></Route>
      </Routes>
  </>
  );
}

export default App;
