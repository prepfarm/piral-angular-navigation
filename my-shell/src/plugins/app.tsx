import { PiralPlugin } from 'piral';

declare module 'piral-core/lib/types/custom' {
    interface PiletCustomApi extends PiletAppApi { }
}

export interface PiletAppApi {
    getApiBaseUrl(): string;
    getEnvironment(): string;
    registerGridPage(path: string, extensionName: string, params?: any): void;
}

export function createAppApi(): PiralPlugin<PiletAppApi> {
    return (context) => ({
        getApiBaseUrl() {
            return 'https://localhost:44398';
        },
        getEnvironment() {
            return 'local';
        },
        registerGridPage(path, extensionName, params) {
            console.log('register Grid page');
        },
    });
}
