import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import * as $ from 'jquery';
import {  } from 'rxjs';
@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {

  

topRated=[];
pageNumbers:number[]=[];
currentPage:number=1;

  constructor(private _MovieServiceService:MovieServiceService) {
    for(let i =1 ; i<=10 ; i++){
      this.pageNumbers.push(i);
    }
   
       _MovieServiceService.movieTopRated(this.currentPage).subscribe( (data) => {
this.topRated = data.results;
          
        } );  
       
      
   }
  
  


   getMovies(pageNumber){
     this.currentPage=pageNumber
    this._MovieServiceService.movieTopRated(this.currentPage).subscribe( (data) => {
      this.topRated = data.results;
    
      
  })}

  nextPage(){

if(this.currentPage==10){
this.currentPage=1;
this.getMovies(this.currentPage);
}
else{
this.getMovies(this.currentPage+1);

}
console.log("rrrr  "+this.currentPage);
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
