// import React,{useState} from 'react';
import Calender from '../ProductDateTime/Calender';

const Product =(props)=> {
 
// const [title, setTitle] = useState(props.Title);
//   const clickHandler =()=>{
  
//     setTitle(props.Price);
//     console.log(title);
//   }
    return (
        <article>
          <div className="prodBlock">
              <Calender Date={props.Date}/>
              <div className='productInfo'>
                <h2>{props.Title}</h2>
                <p>{props.Description}</p>
              </div>
          </div>
          <div>
              <div className="price">{props.Price}</div>
              <button 
              // onClick={clickHandler}
              >Update</button>
          </div>
        </article>
    );
}
export default Product; 