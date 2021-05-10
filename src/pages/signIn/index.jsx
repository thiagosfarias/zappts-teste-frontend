import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container, Label, Button, Or, Header, GoogleButton, AnimationContainer, Sucess, Failed } from '../style'
import googlePng from '../../assets/component.png'
import validateEmail from '../../services/validateEmail';
import validatePassword from '../../services/validatePassword'
import users from '../../mock_data/users'

const SignIn = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const [sucess, setSucess] = useState("")
    const [fail, setFail] = useState("")
    const [hasError, setHasError] = useState(false);
    const emailInput = useRef("")
    const passwordInput = useRef("")

    const verifyEmail = _ => {
        if(!email){
            setEmailError("Email can not be empty")
            return;
        } else if(!validateEmail(email)) {
            setEmailError("This email is not valid")
        }
    }

    const verifyPassword = _ => {
        if(!password){
            setPasswordError("Password can not be empty")
        } else if(!validatePassword(password)){
            setPasswordError("Password is too short")
        }
    }

    const validadeInput = useCallback(event => {
        event.preventDefault();

        setEmailError('')
        setPasswordError('')

        verifyEmail()
        verifyPassword()

        if(!emailError && !passwordError) login()
        else if(!!emailError || !!passwordError){
            setFail("")
            setSucess("")
        }
    }, [email, password])


    const login = _ => {
        setSucess("")
        setFail("")
        if (users.find(user => user.email === email && user.password === password)) {
            console.log("sucess")
            setSucess("Credentials Valid")
            setFail("")
        } else {
            console.log("fail")
            setFail("Credentials Invalid")
            setSucess("")
        }
    }

    return (

        <AnimationContainer>
            <Container>
                <Header>
                    <h1>Invision</h1>
                </Header>

                <Sucess>
                    {sucess}
                </Sucess>
                <Failed>
                    {fail}
                </Failed>

                <h2>Welcom to Invision</h2>

                <form action="login" onSubmit={validadeInput} id="form-signin" data-testid="form-signin">

                    <Label htmlFor="email" hasError={!!emailError}>
                        Users name or Email
                        <input type="text"
                            placeholder="email@example.com"
                            id="email"
                            name="email"
                            value={email}
                            data-testid="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <span className="error" id="emailError">{emailError}</span>
                    </Label>

                    <Label htmlFor="password" hasError={!!passwordError}>
                        Password
                        <input type="password"
                            placeholder="***********"
                            id="password"
                            name="password"
                            value={password}
                            data-testid="password"
                            ref={passwordInput}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <span className="error" id="passwordError">{passwordError}</span>

                        <a href="" className="password">Forgot password?</a>
                    </Label>

                    <Button type="submit" id="btn-signin" data-testid="btn-signin">Sign In</Button>
                </form>

                <Or>
                    <div className="line"></div>
                    <span>Or</span>
                    <div className="line"></div>
                </Or>

                <GoogleButton>
                    <img src={googlePng} alt="" />
                    <p>Sign in with Google</p>
                </GoogleButton>

                <span>New on <strong>Invision</strong>?
                    <a className="link" href="/signup">Create Account</a>
                </span>
            </Container>
        </AnimationContainer>
    )
}


export default SignIn