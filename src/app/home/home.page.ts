import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showLoader = false;


  constructor(private router: Router) {}

  startProcess() {
    this.showLoader = true;
    
    setTimeout(() => {
      this.showLoader = false;
      this.router.navigate(['/otro']); 
    }, 10000); 
  }
}
