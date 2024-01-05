import { Component, OnInit } from '@angular/core';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  literals: PoPageLoginLiterals = {
    registerUrl: 'Criar conta',
    welcome: 'Seja bem-vindo',
    loginLabel: 'Entrar',
  }

  constructor() { }

  ngOnInit() { }

}
