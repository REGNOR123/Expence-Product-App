import React, { useState } from 'react';
import Product from './Product';
import { ProductFilter } from '../Product/ProductFilter';
import Card from '../../Container/Card';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
export const ProductTemplate = (props) => {

  const [filterYear, setFilterYear] = useState();
  // const gettingProductTiledata = (data) => {
  //   console.log("In app.js");
  //   console.log(data);
  // }

  // let filterYearInfo = 'All';
  //   if (filterYear ==='All')
  //   filterYearInfo = '2018'
  //   else if(filterYear ==='2019')
  //   filterYearInfo = '2019'
  //   else if (filterYear ==='2020')
  //   filterYearInfo = '2020'
  //   else if(filterYear ==='2021')
  //   filterYearInfo = '2021'
  //   else if (filterYear ==='2022')
  //   filterYearInfo = '2022'
  //   else
  //   filterYearInfo = '2023'

  const getSelectYear = (data) => {
    setFilterYear(data)
    // console.log("selected year", data);
// console.log("date",props.items.map((x)=>x.Date.getFullYear()));
  }
  const getFilteredData = props.items.filter((x)=> {
    if(filterYear ==='All')
    return x
    else
    return x.Date.getFullYear().toString() === filterYear

  })
  return (
    <>
    
      <Card>
        <Card className='productFilter'>
          <ProductFilter   selected={filterYear} onSelectFilter={getSelectYear} />

           {filterYear ==='All' ? <p> All Years Data</p> : <p>Data for year except {filterYear} is Hidden.</p> }
        </Card>
        
          {
          getFilteredData.map((x) => (
            <Product Key={x.Id} Title={x.Title} Price={x.Price} Description={x.Description} Date={x.Date} />
          ))}
      </Card>
    </>
  );
}