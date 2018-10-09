import { Component } from '@angular/core';
import { MovieService } from "src/app/movies/movie.service";
import { OnInit } from "@angular/core";
import { Category } from "src/app/movies/Category";
import { Movie } from "src/app/movies/Movie";


@Component({
    selector:'movie-list',
    templateUrl:'../movies/app.movielistcomponent.html',
    providers:[MovieService]
    
})

export class MovieListComponent implements OnInit{
    moviesList:Movie[];

    constructor(private movieService:MovieService){
        
    }
    ngOnInit(): void {
      this.movieService.getAllMovies().subscribe(movies=>{this.moviesList=movies,console.log(movies)});
    }
   
    sortName():void{
        
        this.moviesList.sort( function(movie1:Movie, movie2: Movie){
            if(movie1.moviesName < movie2.moviesName)
                return -1;
            else if(movie1.moviesName > movie2.moviesName)
                   return 1;
            else
                return 0;
        });
        
        
    }
    sortRating():void{
        this.moviesList.sort( function(movie1:Movie, movie2: Movie){
            if(movie1.moviesRating < movie2.moviesRating)
                return -1;
            else if(movie1.moviesRating > movie2.moviesRating)
                   return 1;
            else
                return 0;
        });
        
        
        
    }
    sortGenre():void{
    this.moviesList.sort( function(movie1:Movie, movie2: Movie){
        if(movie1.moviesGenre < movie2.moviesGenre)
            return -1;
        else if(movie1.moviesGenre > movie2.moviesGenre)
               return 1;
        else
            return 0;
    });
    }
    
   
}