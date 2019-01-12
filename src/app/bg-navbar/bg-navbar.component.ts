import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'bg-navbar',
  templateUrl: './bg-navbar.component.html',
  styleUrls: ['./bg-navbar.component.css']
})
export class BgNavbarComponent implements OnInit {
  @Input() selectedCompany: string;
  constructor() { }

  ngOnInit() {
  }

}
