
export function saveToken(token){
    sessionStorage.setItem('token', token)
}

export function getToken(){
    return sessionStorage.getItem('token')
}

export function saveRole(role){
    sessionStorage.setItem('role', role)
}

export function getRole(){
    return sessionStorage.getItem('role')
}

export function saveName(name){
    sessionStorage.setItem('name', name)
}

export function getName(){
    return sessionStorage.getItem('name')
}

export function saveNav(nav){
    sessionStorage.setItem('nav', JSON.stringify(nav))
}

export function getNav(){
    return JSON.parse(sessionStorage.getItem('nav'))
}


export function loginOut(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('nav')
    window.location.reload()
}

