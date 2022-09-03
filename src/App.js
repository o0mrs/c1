import {
  Routes,
  Route,
  
} from "react-router-dom";
import Signup from "./com/signup";
import Home from "./com/home";
import Main from "./com/main";
import Tr from "./com/play/t";

function App() {

  return (
<>

<Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/auth" element={<Signup />}></Route>
      <Route path="/home" element={<Main />}></Route>
      <Route path="/play/t" element={<Tr />}></Route>
      </Routes>
  </>
  );
}

export default App;
