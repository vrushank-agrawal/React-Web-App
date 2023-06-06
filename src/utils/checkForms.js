export const checkPassword = (password) => {
    // check if password has a number, a capital letter, a lowercase letter and a special character
    if(password.length < 8 || !password.match(/[0-9]/g) || !password.match(/[A-Z]/g) || !password.match(/[a-z]/g) || !password.match(/[^a-zA-Z\d]/g)) {
        return false
    } else {
        return true
    }
}

export const checkEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
