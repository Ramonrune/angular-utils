import { LogService } from '../log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FuncionarioService {

  ultimoId = 1;
  funcionarios = [ {id: 1, nome: 'Nome'} ];

  constructor(private logService: LogService) {
  }

  adicionar(nome: string) {
    this.logService.log(`Adicionando nome ${nome}...`)
    const funcionario = {
      id: ++this.ultimoId,
      nome: nome
    };

    this.funcionarios.push(funcionario);

    console.log(JSON.stringify(this.funcionarios));
  }

  consultar() {
    return this.funcionarios;
  }
}
/*
export class FuncionarioAbreviadoService extends FuncionarioService {

  constructor(private numeroCaracteres: number) {
    super();
  }

  adicionar(nome: string) {
    super.adicionar(nome.substring(0, this.numeroCaracteres) + '...');
  }

}
*/
