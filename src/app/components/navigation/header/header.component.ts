import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 // @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  isVisible: boolean = false;


  constructor() { }

  ngOnInit(): void {
    

  }
  toggleNav(){
    this.isVisible = !this.isVisible;
  }
/*   onToggleSidenav() {
    this.sidenavToggle.emit();
  } */


}
