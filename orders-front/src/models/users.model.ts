export interface UserModel {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    created: string;
}

export interface UserStateModel {
    usersList: UserModel[];
}