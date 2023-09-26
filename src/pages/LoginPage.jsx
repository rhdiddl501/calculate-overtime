import React, { useState } from "react"
import memberApi from "apis/memberApi"

const LoginPage = () => {

    const [loginForm, setLoginForm] = useState({loginId: '', password: ''})

    const signUpHandler = async () => {
        const data = await memberApi.login(loginForm);
        
        return false;
    }

    return(
        <div>
            <h2>로그인</h2>
            아이디 : <input type='text' name='login_id' value={loginForm.loginId} onChange={(e) => {setLoginForm((prev)=>({...prev, loginId:e.target.value}))}} /> <br/>
            비밀번호 : <input type='password' name='password' value={loginForm.password} onChange={(e) => {setLoginForm((prev)=>({...prev, password:e.target.value}))}} /> <br/>
            <input type='button' value={'로그인'} onClick={signUpHandler} /> <input type='button' value={'회원가입'}/>
        </div>
    )
}

export default LoginPage;