import type { Estudiante } from "../usuarios/Estudiante.js";

export interface IEstudianteRepository {
    obtenerEstudiantes(): Promise<Estudiante[]>
    obtenerEstudiantePorId(id: number): Promise<Estudiante | null>
    buscarEstudiantePorEmail(email: string): Promise<Estudiante | null>
    guardarEstudiante(estudiante: Estudiante): Promise<Estudiante>
    eliminarEstudiante(estudiante: Estudiante): Promise<void>
};