import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-estrelas',
    templateUrl: './estrelas.component.html',
    styleUrls: ['./estrelas.component.css']
})

export class EstrelasComponent implements OnChanges {

    @Input()
    avaliacao: number = 0;
    avaliacaoLargura: number = 0;

    ngOnChanges(): void {
        this.avaliacaoLargura = this.avaliacao * 74 / 5;
    }
}