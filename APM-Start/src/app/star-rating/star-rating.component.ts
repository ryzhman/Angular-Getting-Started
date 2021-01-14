import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'pm-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  @Input()
  rating: number;
  starWidth: number;

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'rating': {
            this.starWidth = this.rating * 75 / 5;
          }
        }
      }
    }
  }
}
