
const APIPaths = {
    DEBUG_OUTPUT: true,

    BASE_URL: "https://api.codenekt.com",
    CAROOLURL: "https://codenekt.ca-rool.com",

    DELETEUSER: "/user",
    SENDCODE: "/user/send-code",
    ADDUSER: "/user/add",
    UPDATEUSER: "/user/update",
    LOGIN: "/user/login",

    LICENSETYPES: "/license/type/list",

    GETINSURERS: "/insurer/list",

    GETBRANDS: "/brand/list",
    GETMODELS: "/brand/model",

    GETCARS: "/vehicle/list",
    ADDCAR: "/vehicle/add",
    GETCAR: "/vehicle",
    UPDATECAR: "/vehicle/update",
    CHECKIMMAT: "/vehicle/checkUniqueNumber",

    GETTYPESEVENTS: "/event/type/list",
    ADDEVENT: "/event/add",
    EVENTLIST: "/event/list",
    DELETEEVENT: "/event/delete",
    GETEVENT: "/event",
    UPDATEEVENT: "/event/update",
    UPDATEEVENT: "/event/update",

    ADDDOCUMENT: "/strongbox/add",
    GETDOCUMENTS: "/strongbox/list",

    GETNOTIFS: "/notification/list",
    READNOTIF: "/notification/read",
    GETPOINTS: "/point/total",
    LISTPOINTS: "/point/list",

    GETONFIDOTOKEN: "/onfido/token",
};

export default APIPaths;
