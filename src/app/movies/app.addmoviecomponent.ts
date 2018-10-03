import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MovieService} from './movies/movies.service';


@Component({
  selector:'my-app'
  templateUrl:'./movies/app.addmoviecomponent.html',
  providers:[MovieService]
})


export class AddMovieComponent{

movies:Movie[];
model:any={};
constructor(private movieService:MovieService,private router:Router){

}

addMovie():void{
  this.movieService.addMovie(this.model).subscribe((movieData)=>this.movies=movieData);
  this.router.navigate(['/create']);

}



}
