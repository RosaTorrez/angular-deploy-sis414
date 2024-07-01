import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AutentServiceService {
  private clickLogin = new BehaviorSubject<boolean>(false);
  display$ = this.clickLogin.asObservable();

  displayLogin(display: boolean){
    this.clickLogin.next(display);
  }
  constructor(private firestore: AngularFirestore) {}

  getUsers(): Observable<any[]> {
    return this.firestore.collection('users').valueChanges();
  }
}
