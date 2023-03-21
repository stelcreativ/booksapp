import React from "react"
import Book from './Book'

const BookShelf = (props) => {
    const { handleUpdateShelf } = props

    return (

        <div className="list-books-content">
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.books.filter((book) => book.shelf === props.shelf)
                            .map((b) => (
                                <li key={b.id}>
                                    <Book book={b}
                                        onChange={handleUpdateShelf}
                                    />
                                </li>
                            ))}

                    </ol>
                </div>
            </div>
        </div>
    )
}


export default BookShelf