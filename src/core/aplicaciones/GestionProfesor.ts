import { Profesor } from "../dominio/usuarios/Profesor.js";
import type { IProfesorRepository } from "../dominio/repositorios/IProfesorRepository.js";

export class GestionProfesor {
    constructor(private readonly repo: IProfesorRepository) {}

    async obtenerProfesores(): Promise<Profesor[]> {
        return this.repo.obtenerProfesores();
    };

    async obtenerProfesorPorId(id: number): Promise<Profesor | null> {
        if (!id || id <= 0) throw new Error("ID invalido");
        return this.repo.obtenerProfesorPorId(id);
    };

    async crearProfesor(datos: { nombre: string; email: string }): Promise<Profesor> {
        const existe = await this.repo.buscarProfesorPorEmail(datos.email);
        if (existe) throw new Error("Email ya en uso");

        const profesor = new Profesor(0, datos.nombre, datos.email);
        return this.repo.guardarProfesor(profesor);
    };

    async eliminarProfesor(id: number): Promise<void> {
        const profesor = await this.repo.obtenerProfesorPorId(id);
        if (!profesor) throw new Error("Profesor no encontrado");
        await this.repo.eliminarProfesor(profesor);
    };
};