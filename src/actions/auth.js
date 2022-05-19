export const LOGIN = "login"
export const LOGOUT = "logout"

export const login = (authObj) => ({
    type:LOGIN,
    payload:authObj
})

export const logout = () => ({
    type: LOGOUT,
    payload: null
})
