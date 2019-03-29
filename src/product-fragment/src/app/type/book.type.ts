export class Book {
  title: string;
  cover?: Cover;
  author: {
    name: string
  };
  identifiers: {
    isbn_13: number
  }
}

class Cover {
  small: string;
  large: string;
  medium: string;
}
