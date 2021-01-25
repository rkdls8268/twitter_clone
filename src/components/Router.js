import React, {useState} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

// 이제부터 우리가 Render시킬 routes는 우리의 인증(로그인) 여부에 따라 달라질 것
const Routers = ({isLoggedIn}) => {
    // Router는 하나의 기능만 담당해야 하므로 state 관련 코드를 App 으로 옮겨주자.
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route> 
                    </> 
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    );
};

export default Routers;