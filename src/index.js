import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';    
import {books} from './Books';
import Book from './Book'


function BookList(){  
  return (
    <section className='booklist'>
      {books.map((book,index)=>{
        return <div>
          <Book key={book.id} book={book}/>
        </div>
      })}
    </section>
      );
}










ReactDOM.render(<BookList/>,document.getElementById('root'));