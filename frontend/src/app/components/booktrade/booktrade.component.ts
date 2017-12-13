import { Component, OnInit, style } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import Book from '../../models/book.model'
import { Console } from '@angular/core/src/console';
import * as _ from 'underscore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-booktrade',
  templateUrl: './booktrade.component.html',
  styleUrls: ['./booktrade.component.css']
})
export class BooktradeComponent implements OnInit {

  constructor(
  	private bookService: BookService
  	) { }
  bookList: Book[];
  bookdetail: Book;
  ngOnInit() {

      this.bookService.getBooks().subscribe(book => {
     
      this.bookList = book;
      this.bookdetail = this.bookList[0];
    });
    }

    getBook(book) {
    this.bookdetail = book;
  }


  //   getBook(book) {

  //   this.bookService.getBook(book._id, book).subscribe(
  //     res => {
  //       this.bookdetail.getBook(this.)=res.json();
        
  //       console.log('bookdetail',bookdetail);

  //     },
  //     err => { }
  //   );
  // }


}

