import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  
 
  popular=[];
  pageNumbers:number[]=[];
  currentPage:number=1;
  
    constructor(private _MovieServiceService:MovieServiceService) {
      for(let i =1 ; i<=10 ; i++){
        this.pageNumbers.push(i);
      }
      this._MovieServiceService.moviePopular(this.currentPage).subscribe( (data) => {
        this.popular = data.results;
                 
                } ); 
           
     }
    
 
  
  
     getMovies(pageNumber){
       this.currentPage=pageNumber
      this._MovieServiceService.moviePopular(this.currentPage).subscribe( (data) => {
        this.popular = data.results;
      
    })}
  
    nextPage(){
  
  if(this.currentPage==10){
  this.currentPage=1;
  this.getMovies(this.currentPage);
  }
  else{
  this.getMovies(this.currentPage+1);
  
  }
 
    }
  
  
    
    previousPage(){
      if(this.currentPage==1){
        this.currentPage=10;
        this.getMovies(this.currentPage);
        }
      else{
         
      this.getMovies(this.currentPage-1);
        }
    
  }
  
  ngOnInit() {
  }

}
