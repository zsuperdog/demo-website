import {Component, OnInit} from '@angular/core';
import {CatImage, CatImageService} from '../service/cat-image.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-catwall',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './catwall.component.html',
  styleUrl: './catwall.component.css',
  standalone: true
})
export class CatwallComponent implements OnInit {
  catImages: CatImage[] = [];
  constructor(private catImageService: CatImageService) {

  }

  ngOnInit(): void {
    this.catImageService.getCatImages().subscribe(catImages => this.catImages = catImages);
  }

}
