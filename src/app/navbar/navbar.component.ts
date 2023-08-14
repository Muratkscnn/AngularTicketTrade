import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  private lastPoppedUrl: any;
  private yScrollStack: number[] = [];
  public showLogin: boolean = false;
  @Output() showLoginEvent = new EventEmitter<boolean>();
  constructor(public location: Location, private router: Router) {

  }
  showLoginFunc() {
    this.showLogin = !this.showLogin;
    this.showLoginEvent.emit(this.showLogin);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
      if (event instanceof NavigationStart) {
        if (event.url != this.lastPoppedUrl)
          this.yScrollStack.push(window.scrollY);
      } else if (event instanceof NavigationEnd) {
        if (event.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          if (this.yScrollStack.length > 0) {
            const lastScrollPosition = this.yScrollStack.pop();
            if (lastScrollPosition !== undefined) {
              window.scrollTo(0, lastScrollPosition);
            }}
        } else
          window.scrollTo(0, 0);
      }
    });
    this.location.subscribe((ev:PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
  }

  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

    if( titlee === '#/home' ) {
      return true;
    }
    else {
      return false;
    }
  }
  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if( titlee === '#/documentation' ) {
      return true;
    }
    else {
      return false;
    }
  }
}
