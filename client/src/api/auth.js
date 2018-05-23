
export const saveToken = (token) => {
    sessionStorage.setItem('token', token)
}

export const getToken = () => {
    return sessionStorage.getItem('token')
}

export const saveRole = (role) => {
    sessionStorage.setItem('role', role)
}

export const getRole = () => {
    return sessionStorage.getItem('role')
}

export const saveName = (name) => {
    sessionStorage.setItem('name', name)
}

export const getName = () => {
    return sessionStorage.getItem('name')
}

export const saveNav = (nav) => {
    sessionStorage.setItem('nav', JSON.stringify(nav))
}

export const getNav = () => {
    return JSON.parse(sessionStorage.getItem('nav'))
}


export const loginOut = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('nav')
    setTimeout(() => {
        window.location.reload()
    },100)
}

