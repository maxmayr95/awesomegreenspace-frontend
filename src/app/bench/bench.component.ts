import { Component, OnInit } from '@angular/core';
import { BenchService } from './../services/bench.service';
import { LocationService } from './../services/location.service';
import { METERES_AWAY_FOR_STOLEN } from '../../environments/environment';
@Component({
  selector: 'app-bench',
  templateUrl: './bench.component.html',
  styleUrls: ['./bench.component.css']
})
export class BenchComponent implements OnInit {

  public benchData: any;
  public isMoved: boolean;
  public index: number;
  public isStolen: boolean;
  public meteres: number;
  constructor(private benchService: BenchService, private locationService: LocationService) { }

  ngOnInit(): void {
    this.benchService.getDatas().subscribe(data => {
      this.benchData = data;
      this.isMoved = this.hasDiffrentLatLong(this.benchData);
      if (this.isMoved) {
        var lat1 = data[this.index - 1].gateways[0].latitude;
        var long1 = data[this.index - 1].gateways[0].longitude;
        var lat2 = data[this.index].gateways[0].latitude;
        var long2 = data[this.index].gateways[0].longitude;
        this.meteres = Math.round(this.locationService.calculateDistance(lat1, long1, lat2, long2));
        if (this.meteres >= METERES_AWAY_FOR_STOLEN) {
          this.isStolen = true;
        }
      }

    });
  }

  hasDiffrentLatLong(data): boolean {
    this.index = Number(0);
    var length = Object.keys(data).length;
    var lat = data[0].gateways[0].latitude;
    var long = data[0].gateways[0].longitude;
    while (this.index < length) {
      var i = String(this.index);

      if (data[i].gateways[0].latitude != lat) {
        return true;
      }
      lat = data[String(this.index)].gateways[0].latitude;
      if (data[i].gateways[0].longitude != long) {
        return true;
      }
      long = data[i].gateways[0].longitude;

      this.index++;
    }

    return false;
  }

}
