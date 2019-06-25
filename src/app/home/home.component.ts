import { Component, OnInit, Renderer2 } from '@angular/core';
import { HomeService } from './home.service';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  people
  props = []
  person = []
  planets
  starships

  constructor(private homeService: HomeService, private http: HttpClient,
    private renderer: Renderer2) {
    var images = ['assets/images/4758956-star-wars-7-wallpaper.jpg', 'assets/images/4758738-star-wars-7-wallpaper.jpg']; //get "login" string
    this.renderer.setStyle(
      document.getElementsByTagName('body')[0],
      'background-image',
      'url(' + images[Math.floor(Math.random() * images.length)] + ')'
    );
  }

  ngOnInit() {
/**
 * Gostaria de ter feito um concatMap aqui, mas acabou ficando muito corrido :/
 */
    this.homeService.getPeople().subscribe(res => {
      console.log(res)
      this.people = res.results
    })
    this.homeService.getPlanet().subscribe(planet => {
      console.log("planet", planet)
    })
    this.homeService.getStarships().subscribe(starship => {
      console.log("starship", starship)
    })
  }

  getInfo(person) {
    this.person = []
    this.props = []
    Object.keys(person).forEach(prop => {
      this.props.push(prop)
      this.person.push(person[prop])
    })
  }

  /*goToRouter() {
    this.router.navigate(['/planets']); por exemplo
  }*/
}
