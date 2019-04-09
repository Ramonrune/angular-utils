import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Ramon';
  dataAniversario = new Date(1998, 6, 5);
  preco = 5000050;
  troco = 0.57;
}
