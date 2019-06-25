import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Observable } from "../../../node_modules/rxjs";

const url = "https://swapi.co/api/"

@Injectable()
export class HomeService{

constructor(private http:HttpClient){
    
}
    getPeople(): Observable<any>{
        return this.http.get(url+'people/')
       }
    getPlanet(){
        return this.http.get(url+'planets/')
    }
    getStarships(){
        return this.http.get(url+'starships/')
    }
}