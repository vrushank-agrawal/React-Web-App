
const APIPaths = {
    DEBUG_OUTPUT: true,

    BASE_URL: "https://api.codenekt.com",
    CAROOLURL: "https://codenekt.ca-rool.com",

    SENDCODE: "/user/send-code",
    UPDATEUSER: "/user/update",
    LOGIN: "/user/login",

    GETBRANDS: "/brand/list",
    GETBRANDSTYPES: "/brand/list/type",
    GETMODELS: "/brand/model",

    GETCARS: "/vehicle/list",
    ADDCAR: "/vehicle/add",
    GETCAR: "/vehicle",
    UPDATECAR: "/vehicle/update",

    ADDDOCUMENT: "/strongbox/add",
    GETDOCUMENTS: "/strongbox/list",

    GETNOTIFS: "/notification/list",
    READNOTIF: "/notification/read",

    ADDCARTE: "/carte/add",
    GETCARTES: "/carte/list",
    GETCARTE: "/carte",
    UPDATECARTE: "/carte/update",
    DELETECARTE: "/carte/delete",

    ADDCOLLABORATEUR: "/collaborateur/add",
    GETCOLLABORATEURS: "/collaborateur/list",
    GETCOLLABORATEUR: "/collaborateur",
    GETUNREGISTEREDCOLLABORATEUR: "/collaborateur/getUnregistered",
    UPDATECOLLABORATEUR: "/collaborateur/update",
    DELETECOLLABORATEUR: "/collaborateur/delete",

    ADDCONTRAT: "/contrat/add",
    GETCONTRAT: "/contrat",
    UPDATECONTRAT: "/contrat/update",
    DELETECONTRAT: "/contrat/delete",

    ADDSINISTRE: "/sinistre/add",
    GETSINISTRES: "/sinistre/list",
    GETSINISTRE: "/sinistre",
    GETUNREGISTEREDSINISTRE: "/sinistre/getUnregistered",
    UPDATESINISTRE: "/sinistre/update",
    DELETESINISTRE: "/sinistre/delete",

};

export default APIPaths;
