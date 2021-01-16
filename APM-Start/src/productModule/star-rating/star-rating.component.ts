import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'pm-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      // there might be multiple @Input so we can distinguish them
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'rating': {
            this.starWidth = this.rating * 75 / 5;
          }
        }
      }
    }
  }

  onClick(): void {
    // event is submitted
    this.ratingClicked.emit('' + this.rating);
  }
}
