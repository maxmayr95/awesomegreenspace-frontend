import { Component, OnInit } from '@angular/core';
import { BenchService } from './../services/bench.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public benchData:any;
  constructor(private benchService:BenchService) { }

  ngOnInit(): void {
    this.benchService.getDatas().subscribe(data=>{
      console.log(data);
        this.benchData = data;
    });
  }

}
