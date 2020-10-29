import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from './../services/fire.service';
@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {
  public app:any;
  public device:any;
  public content:any;
  constructor(private route: ActivatedRoute, private fireService:FireService) { }

  ngOnInit(): void {
    this.app = this.route.snapshot.paramMap.get('app');
    this.device = this.route.snapshot.paramMap.get('device');
    this.fireService.loadFireplaceData(this.app,this.device).subscribe(data=>{
      this.content = data["content"];
    });
  }

  occupied(temperature){
    return (temperature>50);
  }

}
