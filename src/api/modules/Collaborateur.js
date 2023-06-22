import API from "../API";
import APIPaths from "../APIPaths";

export const addCollaborateur = (collaborateur, token) => {
    return API("POST", APIPaths.ADDCOLLABORATEUR, collaborateur, token);
}

export const getCollaborateurs = (token) => {
    return API("GET", APIPaths.GETCOLLABORATEURS, null, token);
}

export const getCollaborateur = (id, token) => {
    return API("GET", APIPaths.GETCOLLABORATEUR + "/" + id, null, token);
}

export const getUnregisteredCollaborateur = (token) => {
    return API("GET", APIPaths.GETUNREGISTEREDCOLLABORATEUR, null, token);
}

export const updateCollaborateur = (id, collaborateur, token) => {
    return API("PUT", APIPaths.UPDATECOLLABORATEUR + "/" + id, collaborateur, token);
}

export const deleteCollaborateur = (id, token) => {
    return API("DELETE", APIPaths.DELETECOLLABORATEUR + "/" + id, null, token);
}