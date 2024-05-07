import { Component, NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { SerieComponent } from './app/serie/serie.component';

export const routes: Routes = [
   {path:'',component:MainComponent},
   {path:'peliculas', component : PeliculaComponent},
   {path:'serie', component : SerieComponent}
   
];
