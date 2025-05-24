export default interface AuthModel {
    username: string;
    password: string;
}

export interface AuthStateModel {
    token: string;
    isAuthenticated: boolean;
    username: string;
}