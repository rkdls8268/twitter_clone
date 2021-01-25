import React, {useState} from "react";
import Routers from "./Router";
import authService from "../fbase";

function App() {
  console.log('auth:', authService.currentUser); // 처음에는 null
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <Routers isLoggedIn={isLoggedIn} />
      <footer>&copy; Twitter Clone {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
