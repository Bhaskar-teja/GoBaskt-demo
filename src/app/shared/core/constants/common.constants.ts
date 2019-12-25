import { environment } from './../../../../environments/environment';

export const authApiUrl = {
    baseUrl: environment.authBaseUrl,
    gobasktUrl: createAuthUrl('/lmOffers/getLmOffers'),
    postRegisterUrl: createAuthUrl('/createUser'),
    getRegisterUrl: createAuthUrl('/getUser'),
    getlmOfferUrl: createAuthUrl('/lmOffers/id'),
}

function createAuthUrl(actionName: string): string {
    return `${environment.authBaseUrl}${actionName}`;
}
