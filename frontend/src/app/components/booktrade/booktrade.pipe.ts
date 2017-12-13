import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class BookFilter implements PipeTransform{
    transform(book: any, searchbook: any): any {
        if(searchbook==undefined) return book;
        return book.filter(function(book){
            return book.name.toLowerCase().includes(searchbook.toLowerCase())
        })
    }

}

