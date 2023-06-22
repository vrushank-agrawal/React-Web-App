import API from "../API";
import APIPaths from "../APIPaths";

export const getBrands = (token) => {
    return API("GET", APIPaths.GETBRANDS, null, token);
}

export const getBrandTypes = (type, token) => {
    return API("GET", APIPaths.GETBRANDTYPES + "/" + type, null, token);
}

export const getModels = (brand, token) => {
    return API("GET", APIPaths.GETMODELS + "/" + brand, null, token);
}

export const addVehicle = (vehicle, token) => {
    return API("POST", APIPaths.ADDCAR, vehicle, token);
}

export const getVehicle = (id, token) => {
    return API("GET", APIPaths.GETCAR + "/" + id, null, token);
}

export const updateVehicle = (id, vehicle, token) => {
    return API("PUT", APIPaths.UPDATECAR + "/" + id, vehicle, token);
}

export const getVehicles = (token) => {
    return API("GET", APIPaths.GETCARS, null, token);
}