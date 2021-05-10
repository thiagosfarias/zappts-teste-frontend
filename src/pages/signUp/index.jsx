import React, { useCallback, useState } from 'react'
import { Container, Label, Button, Or, Header, GoogleButton, AnimationContainer, Sucess, Failed } from '../style';
import googlePng from '../../assets/component.png'
import Users from './../../mock_data/users';
import validateEmail from '../../services/validateEmail';
import validatePassword from '../../services/validatePassword';

const SignUp = props => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [fullnameError, setFullnameError] = useState('');

    const [sucess, setSucess] = useState("")
    const [fail, setFail] = useState("")

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

    const verifyName = _ => {
        if(!fullname){
            setFullnameError("Name can not be empty")
        }
    }

    const validadeInput = useCallback(event => {
        event.preventDefault();

        setFullnameError('')
        setEmailError('')
        setPasswordError('')

        verifyName()
        verifyEmail()
        verifyPassword()

        if(!fullnameError && !emailError && !passwordError) register()

    }, [email, password, fullname])

    const register = _ => {
        setSucess("")
        setFail("")
            if(email !== '' && !Users.find(user => user.email === email)) {
                setSucess("Signed Up")
                setFail("")
            } else if(Users.find(user => user.email === email)){
                setFail("Email already used")
                setSucess("")
            } else {
                setSucess("")
                setFail("")
            }     
    }

    return (
        <AnimationContainer>
             <Container>
            <Header>
                <h1>Invision</h1>
            </Header>

            <Sucess data-testid="sucess">
                {sucess}
            </Sucess>
            <Failed data-testid="fail">
                {fail}
            </Failed>

            <h2>Getting Stared</h2>                  
                <form action="register" data-testid="form-signup" onSubmit={validadeInput}>
                    <Label htmlFor="fullname" hasError={!!fullnameError}>
                        Full Name
                        <input
                            type="text" 
                            id="fullname"
                            placeholder="Your Full Name"
                            name="fullname"
                            value={fullname} 
                            onChange={e => setFullname(e.target.value)}
                        />
                        <span className="error" id="nameError">{fullnameError}</span>
                    </Label>
                    <Label htmlFor="email"  hasError={!!emailError}>
                        Users name or Email
                        <input type="text" 
                                placeholder="email@example.com"
                                id="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} 
                        />
                        <span className="error" id="emailError">{emailError}</span>
                    </Label>
                    <Label htmlFor="password"  hasError={!!passwordError}>
                        Create Password
                        <input type="password" 
                               placeholder="**********"
                               id="password"
                               name="password"
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                        />
                        <span className="error" id="passwordError">{passwordError}</span>
                    </Label>
                    <Button type="submit" data-testid="btn-signup">Sign Up</Button>
                </form>
                <Or>
                    <div className="line"></div>
                    <span>Or</span>
                    <div className="line"></div>
                </Or>

                <GoogleButton>
                    <img src={googlePng} alt="" />
                    <p>Sign up with Google</p>
                </GoogleButton>
                
                <span>By signing up, you agree to <strong>Invision</strong></span>
                <span><a className="link" href="">Terms of Conditions</a> and <a className="link"  href="">Privacy Police</a></span>
                <br />
                <br />
                <span>Already on <strong>Invision</strong>? <a className="link" href="/">Log in</a></span>


            </Container>
        </AnimationContainer>
    )
}

export default SignUp