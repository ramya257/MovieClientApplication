import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { Movie } from "src/app/movies/Movie";
import { MovieService } from "src/app/movies/movie.service";
import { Category } from "src/app/movies/Category";


@Component({
  selector:'my-app',
  templateUrl:'../movies/app.addmoviecomponent.html',
  providers:[MovieService]
})


export class AddMovieComponent implements OnInit{
    
movieNamePattern = "[A-Za-z0-9]+"
movieRatingPattern="^[1-5]\d*(\.\d+)?"

  
    
movies:Movie[];
model:any={};
isDataLoaded:boolean=false;
categories:Category[];
    ngOnInit(): void {
        this.movieService.getMovieCategory().subscribe(categoriesList=>{this.categories=categoriesList,this.isDataLoaded=true,console.log(this.categories)});
        
    }


constructor(private movieService:MovieService,private router:Router){

}

addMovie():void{
  
  this.movieService.addMovie(this.model).subscribe((movieData)=>{this.movies=movieData,console.log(this.movies)});
  this.router.navigate(['/showMovies']);
  

}



}
