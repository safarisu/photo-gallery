import { Routes } from '@angular/router';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component'; 
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: PhotoGalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];