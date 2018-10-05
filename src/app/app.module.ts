import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {MovieComponent} from './movies/app.moviecomponent'


const appRoutes: Routes=[
                    
                     { path: 'getmoviecategory',  component: MovieCategoryList},
                     { path: 'addmovie',  component: MovieComponent },
					 {path:'search',component:MovieSearchComponent}
                      ];



@NgModule({
  declarations: [
    AppComponent,MovieComponent,MovieListComponent,MovieSearchComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
