import { LogService } from './log.service';
import { FuncionarioService } from './funcionario.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
/*
const criarFuncionarioService = () => {
  return new FuncionarioAbreviadoService(2);
}*/

function criarFuncionarioService2() {

}

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // {provide: FuncionarioService, useClass: FuncionarioAbreviadoService} // FuncionarioService
    // { provide: FuncionarioService, useFactory: criarFuncionarioService }
    FuncionarioService,
    LogService,
    { provide: 'LogPrefixo', useValue: 'LOG2' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
