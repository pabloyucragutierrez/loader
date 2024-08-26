import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage {

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
