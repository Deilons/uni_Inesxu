import { Estudiante } from "../dominio/usuarios/Estudiante.js";
import type { IEstudianteRepository } from "../dominio/repositorios/IEstudianteRepository.js";

export class GestionEstudiante {
    constructor(private readonly repo: IEstudianteRepository) {}

    obtenerEstudiantes(): Promise<Estudiante[]> {
        return this.repo.obtenerEstudiantes();
    };

    obtenerEstudiantePorId(id: number): Promise<Estudiante | null> {
        if (!id || id <= 0) throw new Error("ID invalido");
        return this.repo.obtenerEstudiantePorId(id);
    };

    async crearEstudiante(datos: { nombre: string; email:string }): Promise<Estudiante> {
        const existe = await this.repo.buscarEstudiantePorEmail(datos.email);
        if (existe) throw new Error("Email ya en uso");

        const estudiante = new Estudiante(0, datos.nombre, datos.email);
        return this.repo.guardarEstudiante(estudiante);
    };

    async eliminarEstudiante(id: number): Promise<void> {
        const estudiante = await this.repo.obtenerEstudiantePorId(id);
        if (!estudiante) throw new Error("Estudiante no encontrado");
        await this.repo.eliminarEstudiante(estudiante);
    };
};