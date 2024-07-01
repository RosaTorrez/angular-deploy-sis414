import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {
  private objetoCompartidoSubject = new BehaviorSubject<any>(null);
  private idSource = new BehaviorSubject<string | null>(null);
  currentId$ = this.idSource.asObservable();
  private idMovie = new BehaviorSubject<string | null>(null);
  currentIdMovie$ = this.idMovie.asObservable();

  changeId(id: string | null): void {
    this.idSource.next(id);
  }

  enviarObjeto(objeto: any) {
    this.objetoCompartidoSubject.next(objeto);
  }

  changeIdMovie(id: string){
    this.idMovie.next(id);
  }

  obtenerObjeto() {
    return this.objetoCompartidoSubject.asObservable();
  }

}
