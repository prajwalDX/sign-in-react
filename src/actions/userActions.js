
const Cookie = require('js-cookie')
const { default: Axios } = require("axios")
const { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCESS, USER_SIGNIN_ERROR, USER_SIGNOUT_REQUEST, USER_REGISTER_REQUEST, USER_REGISTER_SUCESS, USER_REGISTER_ERROR } = require("../reducers/constants")

const signIn = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } })
    try {
        try {
            const { data } = await Axios.get(`https://603dc72748171b0017b2da58.mockapi.io/api/v1/login?email=${email}`)
            if(data[0].password === password){
                dispatch({ type: USER_SIGNIN_SUCESS, payload: true })
                Cookie.set('userData', true)
            }
            else {
                dispatch({ type: USER_SIGNIN_ERROR, payload: "incorrect credentials" })
            }
            
        } catch (error) {
            dispatch({ type: USER_SIGNIN_ERROR, payload: error.response.data.message })
        }
    } catch (error) {
        dispatch({ type: USER_SIGNIN_ERROR, payload: error.response.data.message })
    }
  }

const register = (name, email, password, company, phone) => async (dispatch) => {
    dispatch({type:USER_REGISTER_REQUEST, payload: (name, email, password, company, phone)})
    try {
        const {data} = await Axios.post(`https://603dc72748171b0017b2da58.mockapi.io/api/v1/login`, {name, email, password, company, phone})
        dispatch({type:USER_REGISTER_SUCESS, payload: data})
    }
    catch(error) {
        dispatch({type: USER_REGISTER_ERROR , payload: error.response.data.message})
    }
 
}

const signOut = () =>(dispatch) => {
    Cookie.remove("userData")
    dispatch({type: USER_SIGNOUT_REQUEST })
    
}



export { signIn, signOut, register }