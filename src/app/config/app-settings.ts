import { environment } from './../../environments/environment';

const apiServer = environment.serverPath;

export class AppSettings {
    public static apiEndpoints = {
        user: {
            login: `${apiServer}/api/user/login`,
            details: `${apiServer}/api/user/details`,
        },
        products: {
            list: `${apiServer}/api/product/list`,
            sliderimages: `${apiServer}/api/product/sliderimages`
        }
    };
}
