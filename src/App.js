import 'devextreme/dist/css/dx.light.css';
import React, { useState } from 'react';
 
import Card from './MyComponent/Container/Card'
import { ProductTemplate } from './MyComponent/UI/Product/ProductTemplate';
import { AddProductTile } from './MyComponent/UI/ProductTile/AddProductTile';
import { ExpanceDataGrid } from './MyComponent/ExpanceDataGrid/ExpanceDataGrid';
import MainCSS from './mainCSS.css'

const App =() =>{
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  console.log(expenses);

  return (
   <>
   <Card className ={MainCSS}>
     <AddProductTile onAddNewItemData={addExpenseHandler} />
   </Card>
   <Card>
    <ExpanceDataGrid items={expenses}/>
   </Card>
      <ProductTemplate items={expenses} />
   </>
  );
}

export default App;

const DUMMY_EXPENSES = [

  {
    Id: 'e1',
    Title: 'Toilet Paper',
    Description: 'Description',
    Price: 94.12,
    Date: new Date(2020, 7, 14),
  },
  { Id: 'e2', Title: 'New TV', Price: 799.49, Description: 'Description', Date: new Date(2021, 2, 12) },
  {
    Id: 'e3',
    Title: 'Car Insurance',
    Description: 'Description',
    Price: 294.67,
    Date: new Date(2021, 2, 28),
  },
  {
    Id: 'e4',
    Title: 'New Desk (Wooden)',
    Description: 'Description',
    Price: 450,
    Date: new Date(2021, 5, 12),
  },
  {
    Id: 'e1',
    Title: 'Toilet Paper',
    Description: 'Description',
    Price: 94.12,
    Date: new Date(2020, 7, 14),
  },
  { Id: 'e2', Title: 'New TV', Price: 799.49, Description: 'Description', Date: new Date(2021, 2, 12) },
  {
    Id: 'e3',
    Title: 'Car Insurance',
    Description: 'Description',
    Price: 294.67,
    Date: new Date(2021, 2, 28),
  },
  {
    Id: 'e4',
    Title: 'New Desk (Wooden)',
    Description: 'Description',
    Price: 450,
    Date: new Date(2021, 5, 12),
  },
  {
    Id: 'e1',
    Title: 'Toilet Paper',
    Description: 'Description',
    Price: 94.12,
    Date: new Date(2020, 7, 14),
  },
  { Id: 'e2', Title: 'New TV', Price: 799.49, Description: 'Description', Date: new Date(2021, 2, 12) },
  {
    Id: 'e3',
    Title: 'Car Insurance',
    Description: 'Description',
    Price: 294.67,
    Date: new Date(2021, 2, 28),
  },
  {
    Id: 'e4',
    Title: 'New Desk (Wooden)',
    Description: 'Description',
    Price: 450,
    Date: new Date(2021, 5, 12),
  },
  {
    Id: 'e1',
    Title: 'Toilet Paper',
    Description: 'Description',
    Price: 94.12,
    Date: new Date(2020, 7, 14),
  },
  { Id: 'e2', Title: 'New TV', Price: 799.49, Description: 'Description', Date: new Date(2021, 2, 12) },
  {
    Id: 'e3',
    Title: 'Car Insurance',
    Description: 'Description',
    Price: 294.67,
    Date: new Date(2021, 2, 28),
  },
  {
    Id: 'e4',
    Title: 'New Desk (Wooden)',
    Description: 'Description',
    Price: 450,
    Date: new Date(2021, 5, 12),
  },
  {
    Id: 'e1',
    Title: 'Toilet Paper',
    Description: 'Description',
    Price: 94.12,
    Date: new Date(2020, 7, 14),
  },
  { Id: 'e2', Title: 'New TV', Price: 799.49, Description: 'Description', Date: new Date(2021, 2, 12) },
  {
    Id: 'e3',
    Title: 'Car Insurance',
    Description: 'Description',
    Price: 294.67,
    Date: new Date(2021, 2, 28),
  },
  {
    Id: 'e4',
    Title: 'New Desk (Wooden)',
    Description: 'Description',
    Price: 450,
    Date: new Date(2021, 5, 12),
  },


]
