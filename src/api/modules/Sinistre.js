import API from "../API";
import APIPaths from "../APIPaths";

export const addSinistre = (sinistre, token) => {
    return API("POST", APIPaths.ADDSINISTRE, sinistre, token);
}

export const getSinistres = (token) => {
    return API("GET", APIPaths.GETSINISTRES, null, token);
}

export const getSinistre = (id, token) => {
    return API("GET", APIPaths.GETSINISTRE + "/" + id, null, token);
}

export const getUnregisteredSinistre = (token) => {
    return API("GET", APIPaths.GETUNREGISTEREDSINISTRE, null, token);
}

export const updateSinistre = (id, sinistre, token) => {
    return API("PUT", APIPaths.UPDATESINISTRE + "/" + id, sinistre, token);
}

export const deleteSinistre = (id, token) => {
    return API("DELETE", APIPaths.DELETESINISTRE + "/" + id, null, token);
}