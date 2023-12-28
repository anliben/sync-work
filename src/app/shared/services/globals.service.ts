import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  baseUrl: string = 'https://my-json-server.typicode.com/anliben/demo'

  constructor() { }

}
