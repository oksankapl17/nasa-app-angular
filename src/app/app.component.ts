import {ChangeDetectorRef, Component, OnDestroy, ViewChild} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  title = 'nasa-project-angular';
  theme = 'light-theme';
  links = [
    {route: '/rovers', icon: 'photo_camera', title: 'ROVERS'},
    {route: '/epic', icon: 'public', title: 'EPIC'},
  ];
  mobileQuery: MediaQueryList;
  private readonly mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
  }

  navToggle(): void {
    this.sidenav?.toggle();
  }

  closeSidenav(): void {
    this.sidenav?.close();
  }
}
