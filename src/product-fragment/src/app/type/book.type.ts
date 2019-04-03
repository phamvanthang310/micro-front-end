export class Book {
  title: string;
  cover?: Cover;
  author: {
    name: string
  };
  identifiers: {
    isbn_10?: number;
    isbn_13: string;
  }
}

class Cover {
  small: string;
  large: string;
  medium: string;
}
