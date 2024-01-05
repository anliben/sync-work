import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { GlobalsService } from '../../services/globals.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient,
    private globalService: GlobalsService,
  ) { }

  getItemsMenu(): Observable<Array<PoMenuItem>> {
    let url = `${this.globalService.baseUrl}/menu`;
    return this.http.get<Array<PoMenuItem>>(url);
  }
}
