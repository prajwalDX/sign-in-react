import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import Cookie from "js-cookie"
import thunk from 'redux-thunk'
import { userRegisterReducer, userSignReducer } from './reducers/userReducer'

const userData = Cookie.getJSON('userData') || null

const initialState = {
  userSign: { userData },
}

const reducer = combineReducers({
    userSign: userSignReducer,
    userRegister: userRegisterReducer
})

const store = createStore(reducer, initialState , compose(applyMiddleware(thunk)))

export default store