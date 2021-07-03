import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Persona} from '../interfaces/persona';
import { NgxGalleryImage } from 'ngx-gallery';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private _http: HttpClient) {
  }
  readonly APIurl = "https://randomuser.me/api/";

  getUserData(): Observable<Persona[]>{

    return this._http.get<Persona[]>(this.APIurl + "?results=16&exc=login,registered,dob");
    //.pipe(data => data);

  }
}