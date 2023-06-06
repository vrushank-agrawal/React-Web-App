import APIPaths from './APIPaths';

function API (method, path, params, token, moreHeaders = {}, doStringify = true) {
    const options = {
        headers: {
            ...{
                'Cookie': 'XDEBUG_SESSION=PHPSTORM',
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-token-api': token
            },
            ...moreHeaders
        },
        method: method,
        ...(params && {body: doStringify ? JSON.stringify(params) : params})
    };

    if (APIPaths.DEBUG_OUTPUT) {
        console.log('[DEBUG] Calling API url : ', APIPaths.BASE_URL + path);
        console.log('[DEBUG] Call Params : ', options);
    }

    return fetch(APIPaths.BASE_URL + path, options)
        .then((resp) => {
            if(resp.status === 401) {
                const response = {status: resp.status, ok: resp.ok, data: {}}
                return response
            } else {
                if(resp.status === 400) {
                    const response = {status: resp.status, ok: resp.ok, data: {}}
                    return response
                } else {
                    if (APIPaths.DEBUG_OUTPUT) {
                        try {
                            const json = JSON.parse(resp._bodyText);
                            console.log("\t[DEBUG] Response content : ", json);
                        } catch (e) {
                            console.log("\t[DEBUG] Raw response content : ", resp);
                        }
                    }
                    return resp.json().then((json) => {
                        const response = {status: resp.status, ok: resp.ok, data: json}
                        console.log('LOG API RESPONSE : ', response)
                        return response
                    });
                }
            }
        })
        .catch(error => {
            console.log('[ERROR] Api call failed `' + APIPaths.BASE_URL + path + ' : ' + error);
            throw new Error(error);
        });
}

export default API;