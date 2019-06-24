import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hasParams: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}


  ngOnInit(): void {
  }

  navigateHome() {
    this.router.navigate(['/']);
  }
}
