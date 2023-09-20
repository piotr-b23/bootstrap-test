import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';

@Component({
  selector: 'app-main-site',
  standalone: true,
  templateUrl: './main-site.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TopNavbarComponent,
    SideNavbarComponent,
    GalleryComponent,
    SiteFooterComponent,
  ],
})
export class MainSiteComponent {}
