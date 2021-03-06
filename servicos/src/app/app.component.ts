import { FuncionarioService } from './funcionario/funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  funcionarios = [];

  constructor(private funcionarioService: FuncionarioService) {

  }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.consultar();
  }

}
