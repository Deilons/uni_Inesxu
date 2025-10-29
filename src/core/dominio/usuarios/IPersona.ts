export interface IPersona {
    readonly id: number;
    readonly nombre: string;
    readonly email: string;

    tieneEmail(): boolean;
};