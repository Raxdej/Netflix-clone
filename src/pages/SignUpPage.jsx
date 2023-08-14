import React, {useState} from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { firebaseAuth } from "../utils/firebase-config";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formValues, setFormValues] = useState({email: "", password:""})

    const navigate = useNavigate()

    const handleSignIn = async()=> {
        try {
            const {email, password} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
        } catch (error) {
            console.log(error)
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser)=>{
        if(currentUser)navigate('/')
    })

    return(
        <Container>
            <BackgroundImage/>
            <div className="content">
                <Header login/>
                <div className="body">
                    <div className="text">
                        <h1>Unlimited movies, Tv Shows and more</h1>
                        <h4>Wath anywhere, canel Anytime</h4>
                        <h6>Ready to wath? Enter your e-mail to create or restart membership</h6>
                    </div>
                    <div className="form">
                        {
                            showPassword ? (
                                <input type="password" placeholder="password" name="password"
                                value={formValues.password}
                                onChange={(e)=>setFormValues({
                                    ...formValues, [e.target.name]: e.target.value
                                })}
                                />
                            ) : (
                                <input type="email" placeholder="email address" name="email"
                                value={formValues.email}
                                onChange={(e)=>setFormValues({
                                    ...formValues, [e.target.name]: e.target.value
                                })}
                                />
                        )}

                        {
                            !showPassword ? (
                                <button onClick={()=>setShowPassword(true)}>Get Stared</button>
                            ) : (
                                <button onClick={handleSignIn}>Sign Up</button>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    .content{
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.8);
        height: 100vh;
        width: 100vw;
        grid-template-columns: 15vh 85vh;
        .body{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .text{
            display: flex;
            flex-direction: column;
            text-align: center;
            font-size: 2rem;
            color: white;
        }
        h1{
            padding: 0 25rem;
        }
        h4{
            margin-top: 1.5rem;
        }
        h6{
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
        }
        .form{
            display: grid;
            width: 60%;
            grid-template-columns: ${({showPassword})=>showPassword?"1fr 1fr": "2fr 1fr"};
            input{
                color: black;
                padding: 1.5rem;
                font-size: 1.2rem;
                width: 45rem;
                &:focus{
                    outline: none;
                }
            }
            button{
                padding: 0.5rem 1rem;
                background-color: red;
                border: none;
                cursor: pointer;
                color: white;
                font-size: 1.05rem;
                width: 10rem;
            }
        }
    }
`

export default SignUpPage