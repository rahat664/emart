import {AfterContentChecked, AfterViewChecked, Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "./auth/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {
  navbarShowOrNot: boolean;
  footerShowOrNot: boolean;
  title = 'emart';

  constructor(private auth: AuthService) {
  }

  ngAfterContentChecked() {
    this.navbarShowOrNot = true
    this.footerShowOrNot = true
  }
}
