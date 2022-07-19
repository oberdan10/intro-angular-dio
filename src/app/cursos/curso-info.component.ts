import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Curso } from "./curso";
import { CursoService } from "./curso.service";


@Component({
    templateUrl: './curso-info.component.html'
})

export class CursoInfoComponent implements OnInit {

    curso?: Curso;

    constructor(private activatedRoute: ActivatedRoute, private cursoService: CursoService){ }

    ngOnInit(): void {
        
       this.curso = this.cursoService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
 
    }
}