import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../type';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  item: Book;

  constructor() {
  }

  ngOnInit() {
  }

  getImg() {
    return {
      'background-image': `url('${this.item.cover.large}')`
    }
  }
}
