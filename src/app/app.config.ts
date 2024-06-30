import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(), 
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyDy_LnxnzuZfYckSJYzaiFlUU6B7FzmUCQ",
      authDomain: "angularsis414.firebaseapp.com",
      databaseURL: "https://angularsis414-default-rtdb.firebaseio.com",
      projectId: "angularsis414",
      storageBucket: "angularsis414.appspot.com",
      messagingSenderId: "370767759265",
      appId: "1:370767759265:web:a99b037c4c64aed7732de0"})), 
      provideAuth(() => getAuth())]
  
};
