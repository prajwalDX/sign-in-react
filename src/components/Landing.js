import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, signIn } from '../actions/userActions'
import landing_img from './landing-img.svg'
import './Landing.css'

export default function Landing() {
    
    const [login, setLogin] = useState(false)

    const userSign = useSelector(state => state.userSign)

    const { loading , error } =  userSign

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [company, setCompany] = useState()
    const [phone, setPhone] = useState()

    const loginToggle = () => {
        if(login)
            setLogin(false)
        else
            setLogin(true)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const companyHandler = (e) => {
        setCompany(e.target.value)
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
    }

    const dispatch = useDispatch()
    
    const signupHandler = () => {
        if(name&&email&&password&&company&&phone){
        dispatch(register(name, email, password, company, phone))
        setName()
        setEmail()
        setPassword()
        setCompany()
        setPhone()
        loginToggle()
        }
    }

    const loginHandler = () => {
        if(email&&password){
        dispatch(signIn(email,password))
        setEmail()
        setPassword()
        }
    }

    useEffect(() => {
        if(loading){}

    }, [loading])

    
    return (
        <>
        <div className="landing-wrapper">
            <div className="container flx-row jus-sp-evn">
                <div className="">
                    <img className="landing-img" src={landing_img} alt=""/>
                </div>
                <div className="">
                    <div className="form">
                        <div className="w-16 center flx-column">
                            <div>
                                <h2 className="form-label">{login ? "login" : "sign up"}</h2>
                            </div>

                            <div className="input-height flx-column jus-cntr">
                                <div >
                                <input className="input" type="email" value={email} placeholder="email *" onChange={(e) => emailHandler(e)} required/>
                                <input className="input" type="text" value={password}  placeholder="password *" onChange={(e) => passwordHandler(e)} required/>
                            </div>
                            {login ? " " : 
                            <>
                                <input className="input" type="text" value={name}  placeholder="name *" onChange={(e) => nameHandler(e)} required/>
                                <input className="input" type="text"  value={company} placeholder="company *" onChange={(e) => companyHandler(e)} required/>
                                <input className="input" type="tel" value={phone}  placeholder="phone no *" onChange={(e) => phoneHandler(e)} required/>
                            </>
                            }

                             {
                                    loading ?

                                    <h2 className="msg al-sl-cntr ">Loading ...</h2>
                                    :
                                    ""

                                }
                                
                            

                            </div>
                            <div className="flx-column al-cntr">
                                <button className="btn" onClick={login ? loginHandler : signupHandler}>{login ? "login" : "sign up"}</button>
                                <h2 className="form-link" onClick={loginToggle}>{login ? "create account" : "already signed up ?"}</h2>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
