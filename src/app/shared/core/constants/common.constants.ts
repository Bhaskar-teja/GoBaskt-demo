import { environment } from './../../../../environments/environment';

export const authApiUrl = {
    baseUrl: environment.authBaseUrl,
    postRegisterUrl: createAuthUrl('/createUser'),
    getRegisterUrl: createAuthUrl('/getUser'),
}

function createAuthUrl(actionName: string): string {
    return `${environment.authBaseUrl}${actionName}`;
}
