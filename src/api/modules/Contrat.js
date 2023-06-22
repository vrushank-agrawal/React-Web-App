import API from "../API";
import APIPaths from "../APIPaths";

export const addContrat = (contrat, token) => {
    return API("POST", APIPaths.ADDCONTRAT, contrat, token);
}

export const getContrat = (id, token) => {
    return API("GET", APIPaths.GETCONTRAT + "/" + id, null, token);
}

export const updateContrat = (id, contrat, token) => {
    return API("PUT", APIPaths.UPDATECONTRAT + "/" + id, contrat, token);
}

export const deleteContrat = (id, token) => {
    return API("DELETE", APIPaths.DELETECONTRAT + "/" + id, null, token);
}