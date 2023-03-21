import './App.css';
import { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Search from "./Search"
import ListBookShelves from "./ListBookShelves"
import *as BooksAPI from "./BooksAPI"

function App() {


  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const handleUpdateShelf = (book, pickedShelf) => {
    const movedBooks = books.map(b => {
      if (b.id === book.id) {
        book.shelf = pickedShelf
        return book
      }
      return b
    })
    setBooks(movedBooks)
  }


  {/** 
  const handleUpdateShelf = (book, pickedShelf) => {

    BooksAPI.update(book, pickedShelf).then((res) => { book.shelf = pickedShelf })
    for (const b of books) {
      books.filter(b => b.id !== book.id)
        .concat([book])


    }
  }*/}

  return (
    <div >

      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ListBookShelves books={books} changeShelf={handleUpdateShelf} />
            }
          />
          <Route
            path="/search"
            element={
              <Search books={books}
                changeShelf={handleUpdateShelf}
              />
            }
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
