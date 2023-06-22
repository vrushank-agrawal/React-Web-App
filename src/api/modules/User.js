import API from "../API";
import APIPaths from "../APIPaths";

export const login = (user) => {
    return API("POST", APIPaths.LOGIN, user, null);
}

export const sendCode = (email) => {
    return API("POST", APIPaths.SENDCODE, email, null);
}