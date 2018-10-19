import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title:string = "";

  constructor(private config:ConfigService) { }


  ngOnInit() {
  	this.title = this.config.title;
  }

}
