import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SearchMovieComponent } from "src/app/movies/app.searchmoviecomponent";
import { AddMovieComponent } from "src/app/movies/app.addmoviecomponent";
import { MovieComponent } from "src/app/movies/app.moviecomponent";


const appRoutes: Routes=[
                     { path: 'createMovie',  component: AddMovieComponent },
					 {path:'searchMovie',component:SearchMovieComponent},
					 
					 
                      ];



@NgModule({
  declarations: [
    AppComponent,MovieComponent,AddMovieComponent,SearchMovieComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
