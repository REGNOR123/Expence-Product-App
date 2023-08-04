const Calender=(props)=>{
    const day = props.Date.toLocaleString('en-US',{day :'2-digit'});
    const month = props.Date.toLocaleString('en-US',{month :'long'});
    const year = props.Date.getFullYear();
    return(
        <>
        <div className='calender'>
                <span>{day}</span>
                <span>{month}</span>
                <span>{year}</span>
              </div>
        </>
    )
}
export default Calender;