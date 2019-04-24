import { LogService } from './../log.service';
import { FuncionarioService } from './../funcionario.service';
import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  constructor(
    private funcionarioService: FuncionarioService,
    private logService: LogService
    ) { }

  adicionar(nome: string) {
    this.logService.log(`Adicionando ${nome}`);
    this.funcionarioService.adicionar(nome);
  }

}
