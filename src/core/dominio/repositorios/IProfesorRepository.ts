import type { Profesor } from "../usuarios/Profesor.js";

export interface IProfesorRepository {
    obtenerProfesores(): Promise<Profesor[]>
    obtenerProfesorPorId(id: number): Promise<Profesor | null>
    buscarProfesorPorEmail(email: string): Promise<Profesor | null>
    guardarProfesor(profesor: Profesor): Promise<Profesor>
    eliminarProfesor(profesor: Profesor): Promise<void>
};