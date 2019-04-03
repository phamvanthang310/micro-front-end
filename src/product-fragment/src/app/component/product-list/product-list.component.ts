import { Component, OnInit } from '@angular/core';
import { Book } from '../../type';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  items: Array<Book>;

  constructor() {
    this.items = [
      {
        title: 'Harry Potter and the Chamber of Secrets',
        author: {
          name: 'J. K. Rowling',
        },
        cover: {
          small: '',
          medium: '',
          large: 'https://covers.openlibrary.org/b/id/8081272-L.jpg'
        },
        identifiers: {
          isbn_13: '9780439064873'
        }
      },
      {
        title: 'Clean Code',
        author: {
          name: 'Robert C. Martin',
        },
        cover: {
          small: '',
          medium: '',
          large: 'https://covers.openlibrary.org/b/id/8085499-L.jpg'
        },
        identifiers: {
          isbn_13: '9780132350884'
        }
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        author: {
          name: 'J. K. Rowling',
        },
        cover: {
          small: '',
          medium: '',
          large: 'https://covers.openlibrary.org/b/id/8081272-L.jpg'
        },
        identifiers: {
          isbn_13: '9780439064873'
        }
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        author: {
          name: 'J. K. Rowling',
        },
        cover: {
          small: '',
          medium: '',
          large: 'https://covers.openlibrary.org/b/id/8081272-L.jpg'
        },
        identifiers: {
          isbn_13: '9780439064873'
        }
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        author: {
          name: 'J. K. Rowling',
        },
        cover: {
          small: '',
          medium: '',
          large: 'https://covers.openlibrary.org/b/id/8081272-L.jpg'
        },
        identifiers: {
          isbn_13: '9780439064873'
        }
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        author: {
          name: 'J. K. Rowling',
        },
        cover: {
          small: '',
          medium: '',
          large: 'https://covers.openlibrary.org/b/id/8081272-L.jpg'
        },
        identifiers: {
          isbn_13: '9780439064873'
        }
      }
    ]
  }

  ngOnInit() {
  }

}
