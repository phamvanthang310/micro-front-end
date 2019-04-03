import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Book } from '../../type';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {
  @Input()
  item: Book;

  constructor() {
  }

  ngOnInit() {
  }

  addToCart(item: Book) {
    const event = new CustomEvent('payment:addToCart', {detail: item.identifiers.isbn_13});
    window.dispatchEvent(event);
    // EventBus.dispatch('payment:addToCart', this, item.identifiers.isbn_13);
    console.log('🔘 payment:addToCart is fired ' + item.identifiers.isbn_13);
  }

  getImg() {
    return {
      'background-image': `url('${this.item.cover.large}')`
    }
  }
}
