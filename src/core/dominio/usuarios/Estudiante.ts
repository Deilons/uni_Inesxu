import type { IPersona } from "./IPersona.js";
export class Estudiante implements IPersona {
    constructor(
        public readonly id: number,
        public readonly nombre: string,
        public readonly email: string
    ) {
        this.validarNombre(nombre);
        this.validarEmail(email);
    };

    private validarNombre(nombre: string): void {
        if (!nombre || nombre.trim() === '') {
            throw new Error('Nombre es requerido');
        };
        if (/\d/.test(nombre)) { // validar si el nombre contiene numeros con la expresion regular /\d/
            throw new Error('Nombre no puede contener numeros');
        };
    };

    private validarEmail(email: string): void {
        if (!email.includes('@')) {
            throw new Error('Email invalido');
        };
    };

    tieneEmail(): boolean {
        return !!this.email;
    };
};