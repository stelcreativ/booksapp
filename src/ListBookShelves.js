import React from "react"
import BookShelf from "./BookShelf"
import { Link } from "react-router-dom"


const ListBookShelves = (props) => {
    const { books, handleUpdateShelf } = props

    return (

        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="search-book">
                <Link to='/search'>Find new book</Link>
            </div>

            <BookShelf
                books={books}
                shelf="currentlyReading"
                title="Currently Reading"
                changeShelf={handleUpdateShelf} />
            <BookShelf
                books={books}
                shelf="wantToRead"
                title="Want to Read"
                changeShelf={handleUpdateShelf}
            />
            <BookShelf
                books={books}
                shelf="read"
                title="read"
                changeShelf={handleUpdateShelf}
            />

        </div>

    )
}

export default ListBookShelves