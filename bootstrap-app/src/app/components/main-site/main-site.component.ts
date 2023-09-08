import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-main-site',
  standalone: true,
  imports: [
    CommonModule,
    TopNavbarComponent,
    SideNavbarComponent,
    GalleryComponent,
  ],
  templateUrl: './main-site.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSiteComponent {}
