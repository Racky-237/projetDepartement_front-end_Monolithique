import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-fixed',
  templateUrl: './header-fixed.component.html',
  styleUrls: ['./header-fixed.component.css']
})
export class HeaderFixedComponent {

  isFixed = false;

  @HostListener('window:scroll')
  onWindowScroll(){
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFixed = scrollOffset >= 50;
  }

}
