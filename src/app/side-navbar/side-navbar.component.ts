import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  nowPlaying=[];
  topRated=[];
  pageNumbers:number[]=[];
  currentPage:number=1;
  constructor() { }

  /*getTopRated( _MovieServiceService:MovieServiceService){
    for(let i =1 ; i<=10 ; i++){
      this.pageNumbers.push(i);
    }
    _MovieServiceService.movieTopRated(this.currentPage).subscribe( (data) => {
      this.topRated = data.results;
                console.log(this.topRated);
              console.log("ssssssss  "+ this.currentPage);
          
              } ); 
         
  }*/
  press() {
    if ($(".toggle-menu i").attr("class") == "fa fa-align-justify") {
      $(".toggle-menu i").attr("class", "fa fa-align-justify fa-times");
      $(".header-nav").css("left", "240px");
      $(".nav-menu").addClass("openMenu");
      $(".nav-item li").css({ "opacity": "1", "padding-top": "25px" });
  }
    else {
      $(".toggle-menu i").attr("class", "fa fa-align-justify");
      $(".header-nav").css("left", "0px");
      $(".nav-menu").removeClass("openMenu");
      $(".nav-item li").css({ "opacity": "0", "padding-top": "500px" });
  }
  }
  ngOnInit() {
  }

}
