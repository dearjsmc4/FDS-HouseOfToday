import { Component, OnInit, Input } from '@angular/core';
import { review } from 'src/app/core/models/store.interface';


@Component({
  selector: 'app-product-review',
  template: `
    <div class="product-review-container">
      <a class="write-review cursor">리뷰쓰기</a>
      <div class="star-rate-container">
        <span class="star-avg">{{ starAvg }}</span>
        <div class="star-bg">
          <div class="star-rate" [style.width.px]="starAvg * 60">
            <img src="../../../../assets/image/star-rate.png">
          </div>
        </div>
      </div>
      <div class="filter-container">
      <ul>
        <li class="review-filter-menu cursor">베스트순</li>
        <li class="review-filter-menu cursor">최신순</li>
        <li class="review-filter-menu cursor"><span class="pic-icon"></span>사진리뷰</li>
      </ul>
      <ul class="filter-btns">
        <li>
          <button class="review-filter-btn cursor">별점
          <span class="pointer-icon"></span>
          </button>
        </li>
        <li>
          <button class="review-filter-btn cursor">옵션
          <span class="pointer-icon"></span>
          </button>
        </li>
      </ul>
      </div>
      <article class="user-review" *ngFor="let review of chosenList">
        <span>사용자</span>
        <div class="review-star-score">
          <span class="star pic-icon" *ngFor="let star of range(review['star_score'])">
          </span>
        </div>
        <span class="review-date">{{ review.created }}</span>
        <div class="review-image" *ngIf="review.image !== null">
          <img src="../../../../assets/image/meat.jpg">
        </div>
        <p class="review-comment">{{ review.comment }}</p>
        <button class="helpful cursor">도움이 돼요</button>
      </article>
      <app-pagination 
        [originalList]="originalList"
        [chosenList]="chosenList"
        [pages]="pages"
        (change)="changePage($event)">
      </app-pagination>
    </div>
  `,
  styleUrls: ['./product-review.scss']
})
export class ProductReviewComponent implements OnInit {

  @Input() originalList: review[];
  @Input() chosenList: review[];
  @Input() pages: any;
  @Input() starAvg: number;

  constructor() { }

  ngOnInit() {
    
  }

  range(i: number){
    return Array(i);
  }

  changePage(chosenList: review[]){
    this.chosenList = chosenList;
  }

  
}
