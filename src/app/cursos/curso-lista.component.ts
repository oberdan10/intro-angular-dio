import { Component, OnInit } from "@angular/core";
import { Curso } from "./curso";
import { CursoService } from "./curso.service";

@Component({
    templateUrl: './curso-lista.component.html'
})
export class CursoListaComponent implements OnInit {
    _cursos: Curso[] = [];
    cursosFiltrados: Curso[] = [];
    _filtrarPor!: string;
    

    //Injeção de Dependência - Curso Serviço
    constructor(private cursoService: CursoService) {

    }

    ngOnInit(): void { //Inicialização de curso-lista
        this._cursos = this.cursoService.retrieveAll();
        this.cursosFiltrados = this._cursos;

    }

    set filtrar(value: string) {
        this._filtrarPor = value;
        this.cursosFiltrados = this._cursos.filter((curso: Curso) => curso.name.toLocaleLowerCase().indexOf(this._filtrarPor.toLocaleLowerCase()) > -1)
    }

    get filtrar() {
        return this._filtrarPor;
    }
}