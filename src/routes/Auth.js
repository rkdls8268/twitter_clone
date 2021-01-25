import React, {useState} from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => { // 바뀌면 실행되는 함수
        const {target: {name, value}} = event;
        // event: 무슨 일이 일어났는가? 에 해당하는 부분, target: 변경이 일어난 부분
        // name: 내가 부여한 이름, value: 키보드로 입력된 값
        if (name == "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    // 누군가가 submit할 때마다 그 event를 가져다 preventDefault() 시킴
    const onSubmit = (event) => {
        // 기본 행위가 실행되는 것을 원치 않는다는 뜻. 내가 컨트롤하게 해주라는 것!
        event.preventDefault();
    };
    return (
        <div>
            <form>
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={email}
                    onChange={onChange}
                />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={password}
                    onChange={onChange}
                />
                <input type="submit" value="Log In" />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
};

export default Auth;