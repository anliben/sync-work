import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  baseUrl: string = 'http://localhost:3000'

  constructor() { }

}
