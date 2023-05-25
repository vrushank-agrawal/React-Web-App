//const apiToken = 'api_sandbox.x7EEIOQONx0.TaxF79irc4--qqnbuRuZvZfZZnekARKt'; // DO NOT expose your api token in client code: keep it on the backend server.
const apiToken = 'api_live.ALPMUqOgNL3.R95mKZhhTVsZ-t9JVOSf5GRPnabEAwFt';

export const getDocumentById = async(idDoc) => {
  const documentResponse = await fetch(
    'https://api.onfido.com/v3/documents/'+idDoc+'/download',
    {
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + apiToken,
        'Content-Type': 'application/json',
      },
      body: null,
    }
  );

  if(!documentResponse.ok) {
    console.log(documentResponse, 'error');
    return {
      status: 'Unable to get document',
      message:
        "Error when trying to recieve document",
      sdkToken: null,
    };
  }

  console.log('documentResponse', documentResponse)
  let blob = null

  await documentResponse
  .blob()
  .then((responseBlob) => {
    console.log('responseBlob', responseBlob)
    blob = responseBlob
  })
  .catch(err => {
    console.log(err, 'error');
    return {
      status: 'Unable to get document',
      message:
        "Error when trying to recieve document",
      sdkToken: null,
    };
  });

  return blob
}

export const createSdkToken = async (applicant, applicationId) => {

  const applicantResponse = await fetch(
    'https://api.onfido.com/v3/applicants',
    {
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + apiToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicant),
    },
  );

  if (!applicantResponse.ok) {
    console.log(applicantResponse, 'error');
    return {
      status: 'Unable to  start the SDK',
      message:
        "API Token is required to initiate SDK flow. Check your internet connection or API token. To try again, press 'Launch'",
      sdkToken: null,
    };
  }

  const sdkRequestBody = {
    applicant_id: '',
    application_id: applicationId,
  };

  await applicantResponse
    .json()
    .then(responseJson => {
      sdkRequestBody.applicant_id = 'db491646-b601-4338-99ac-7c59a8422194'
    })
    .catch(err => {
      console.log(err, 'error');
      return {
        status: 'Unable to start the SDK',
        message:
          'Unexpected error occurred while trying to get the applicant id from the response.',
        sdkToken: null,
      };
    });

  const sdkTokenResponse = await fetch('https://api.onfido.com/v3/sdk_token', {
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + apiToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sdkRequestBody),
  });

  if (!sdkTokenResponse.ok) {
    console.log(sdkTokenResponse, 'error');
    return {
      status: 'Unable to start the SDK',
      message:
        "Application id is required to initiate SDK flow. Check your internet connection or application id. To try again, press 'Launch'",
      sdkToken: null,
    };
  }

  let sdkToken;
  await sdkTokenResponse
    .json()
    .then(responseJson => (sdkToken = responseJson.token))
    .catch(err => {
      console.log(err, 'error');
      return {
        status: 'Unable to start the SDK',
        message:
          'Unexpected error occurred while trying to get the SDK token from the response.',
        sdkToken: null,
      };
    });
  return {
    sdkToken,
  };
};

/**
 * END BACKEND SERVER CODE EXAMPLE
 */
