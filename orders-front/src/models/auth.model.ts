export default interface AuthModel {
    email: string;
    password: string;
}

export interface AuthStateModel {
    token: string;
    isAuthenticated: boolean;
    username: string;
}