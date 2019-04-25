import { FuncionarioModule } from './funcionario/funcionario.module';
import { LogService } from './log.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/*
const criarFuncionarioService = () => {
  return new FuncionarioAbreviadoService(2);
}*/

function criarFuncionarioService2() {

}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FuncionarioModule
  ],
  providers: [
    // {provide: FuncionarioService, useClass: FuncionarioAbreviadoService} // FuncionarioService
    // { provide: FuncionarioService, useFactory: criarFuncionarioService }
    // { provide: 'LogPrefixo', useValue: 'LOG2' }
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
