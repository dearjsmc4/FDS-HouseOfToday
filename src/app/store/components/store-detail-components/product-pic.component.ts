import { Component, OnInit, Input } from '@angular/core';
import { thumbnail_image } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-pic',
  template: `
  <div class="product-pic-container">
    <div class="pic-list">
      <button class="pic-item cursor" *ngFor="let pic of productImages; let i=index"
      [style.backgroundImage]="'url('+ pic.image +')'"
      (mouseover)="activeId = pic.id"
      [class.active]="pic.id === activeId"></button>
    </div>
    <div class="main-picture-container">
      <img *ngFor="let pic of productImages; let i=index" 
      src="{{ pic.image }}" class="main-picture"
      [class.active]="pic.id === activeId">
    </div>
  </div>
  `,
  styleUrls: ['./product-pic.scss']
})
export class ProductPicComponent implements OnInit {
  
  @Input() productImages: thumbnail_image[];
  @Input() activeId: number;

  ngOnInit(){
    
  }

}
