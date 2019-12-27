import { environment } from './../../../../environments/environment';

export const authApiUrl = {
    baseUrl: environment.authBaseUrl,
    gobasktUrl: createAuthUrl('/lmOffers/getLmOffers'),
    postRegisterUrl: createAuthUrl('/createUser'),
    getRegisterUrl: createAuthUrl('/getUser'),
    getlmOfferUrl: createAuthUrl('/lmOffers/id'),
    getBasktOffers: createAuthUrl('/basket/coupons'),
}

function createAuthUrl(actionName: string): string {
    return `${environment.authBaseUrl}${actionName}`;
}
