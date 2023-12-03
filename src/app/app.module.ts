import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { PageNotFoundComponent } from './components/layouts/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { CatsComponent } from './components/animals/cats/cats.component';
import { DogsComponent } from './components/animals/dogs/dogs.component';
import { PetComponent } from './components/pet/pet.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './pipes/safe.pipe';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "cats", component: CatsComponent },
  { path: "dogs", component: DogsComponent },
  { 
    path: "pet", 
    children: [
      { path: "cat/:name", component: PetComponent },
      { path: "dog/:name", component: PetComponent },
      { path: "", redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatsComponent,
    DogsComponent,
    PetComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
