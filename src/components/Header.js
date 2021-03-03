import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../actions/userActions'
import './Header.css'

export default function Header() {
    
  const userSign = useSelector(state => state.userSign)

  const { userData } =  userSign

  const dispatch = useDispatch()
    
  const signoutHandler = () => {
      dispatch(signOut())
  }

    return (
        <>
            <div className="header-wrapper">
                <div className="container flx-row jus-sp-btn">
                    <h2 className="logo">DashBoard</h2>
                    {
                        userData ? 
                        <button onClick={signoutHandler} className="bk-grey btn">logout</button>
                        :
                        " "
                    }
                </div>
            </div>            
        </>
    )
}
