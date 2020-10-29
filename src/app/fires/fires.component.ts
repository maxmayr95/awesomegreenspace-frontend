import { Component, OnInit,ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FIREPLACES_JSON } from '../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fires',
  templateUrl: './fires.component.html',
  styleUrls: ['./fires.component.css']
})
export class FiresComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  public fireplaces:any;
  zoom = 12;
  center: google.maps.LatLngLiteral;
  constructor(private router:Router,private http: HttpClient) {
    //set zurich bfh as standard
    this.center = {
      lat: 47.373628 ,
      lng: 8.5267266
    }
  }

  public getJSON(): Observable<any> {
    return this.http.get(FIREPLACES_JSON);
  }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    
    this.getJSON().subscribe(data => {
      console.log(data["fireplaces"]);
        this.fireplaces = data["fireplaces"];
     });
  }
  openInfo(fireplace){
    this.router.navigate(['fireplaces/'+fireplace["app_id"]+'/'+fireplace["device_id"]]);
  }
}
