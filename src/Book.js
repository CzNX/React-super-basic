

const Book =(props)=> {
    const {img,title,author} = props.book;
    const clickHandler= ()=>{
      alert('hello world');
    };
    const complexExample= (author)=>{
      alert(author);
    };
    return (
      <article className='book' onMouseOver={()=>{
        console.log(title)
      }}>
        <img src={img} alt='err' />
        <h4 onClick={()=>alert('from')}  style={{cursor:'pointer'}}>{author}</h4>
        <h1>{title}</h1>
          <button type='button' onClick={clickHandler}>Click me</button>
          <button type='button' onClick={()=>complexExample(author)}>More complex</button>
      </article>
    )
  }

export default Book