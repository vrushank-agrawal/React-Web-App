import API from "./API";
import apiPaths from "./APIPaths";

export const login = (user) => {
    return API("POST", apiPaths.LOGIN, user, null);
};
