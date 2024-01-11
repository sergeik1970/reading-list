import React, { Component } from 'react';
import { getBooks } from '../services/bookService';

//imrc - shortcut create react component
//cc - create class

class Books extends Component {
    state = {
        books: getBooks()
    }
    render() { 
        if (this.state.books.length === 0) return <p>Здесь нет ни одной книги :(</p>;

        return (
            <React.Fragment>
                <p>В списке книг: {this.state.books.length}</p>
            </React.Fragment>
        )
    }
}
 
export default Books;