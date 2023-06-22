import API from "../API";
import APIPaths from "../APIPaths";

export const addCarte = (carte, token) => {
    return API("POST", APIPaths.ADDCARTE, carte, token);
}

export const getCartes = (token) => {
    return API("GET", APIPaths.GETCARTES, null, token);
}

export const getCarte = (id, token) => {
    return API("GET", APIPaths.GETCARTE + "/" + id, null, token);
}

export const updateCarte = (id, carte, token) => {
    return API("PUT", APIPaths.UPDATECARTE + "/" + id, carte, token);
}

export const deleteCarte = (id, token) => {
    return API("DELETE", APIPaths.DELETECARTE + "/" + id, null, token);
}