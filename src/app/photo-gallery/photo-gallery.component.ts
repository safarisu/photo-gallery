import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {
  photos: { url: string, size: string }[] = [];
  loadedImages = 0;  // Keeps track of how many images are currently loaded
  totalImages = 30;  // Set the number of images available

  constructor() {
    this.loadMoreImages();  // Load initial images
  }

  loadMoreImages() {
    const batchSize = 9; // Load 9 images at a time
    for (let i = this.loadedImages; i < this.loadedImages + batchSize && i < this.totalImages; i++) {
      this.photos.push({
        url: `images/photo${i + 1}.jpg`,
        size: this.getRandomSize()
      });
    }
    this.loadedImages += batchSize;
  }

  getRandomSize(): string {
    const sizes = ['small', 'medium', 'large'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      this.loadMoreImages();  // Load more images when scrolling down
    }
  }
}
