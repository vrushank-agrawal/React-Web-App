import API from "./API";
import APIPaths from "./APIPaths";

export const getNotifications = (token) => {
    return API("POST", APIPaths.GETNOTIFS, null, token);
};

export const readNotification = (token, id) => {
    return API("POST", APIPaths.READNOTIF, {id}, token);
}

export const deleteNotification = (token, id) => {
    return API("POST", APIPaths.DELETEEVENT, {id}, token);
}
