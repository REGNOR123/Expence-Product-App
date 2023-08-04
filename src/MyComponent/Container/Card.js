import './Card.css'

 const card =(props) =>{
    //  const classes =  'container'+props.classname;
  //here, children will be the content between wrapper component <Card>{.....}</Card>
    return <div className='container'>{props.children}
    </div>
    }
  export default card;

