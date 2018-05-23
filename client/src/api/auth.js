
export const saveToken = function(token) {
    sessionStorage.setItem('token', token)
}

export const getToken = function() {
    return sessionStorage.getItem('token')
}

export const saveRole = function(role) {
    sessionStorage.setItem('role', role)
}

export const getRole = function() {
    return sessionStorage.getItem('role')
}

export const saveName = function(name) {
    sessionStorage.setItem('name', name)
}

export const getName = function() {
    return sessionStorage.getItem('name')
}

export const saveNav = function(nav) {
    sessionStorage.setItem('nav', JSON.stringify(nav))
}

export const getNav = function() {
    return JSON.parse(sessionStorage.getItem('nav'))
}


export const loginOut = function() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('nav')
    setTimeout(() => {
        window.location.reload()
    },100)
}

