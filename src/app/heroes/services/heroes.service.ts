import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import {Heroe} from '../interfaces/hero.interface'
import { enviroment } from 'src/enviroments/environments';
@Injectable({providedIn: 'root'})
export class HeroesService {
  private baseUrl:string = enviroment.baseUrl;
  constructor(private httpClient: HttpClient) { }


getHeroes():Observable<Heroe[]>{
return this.httpClient.get<Heroe[]>(`${this.baseUrl}/heroes`);
}

getHeroById(id:string):Observable<Heroe | undefined>{

  return this.httpClient.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
  .pipe(
    catchError(error=>of(undefined))
  );
}

}
