import { useState } from "react";

export const ProductFilter = (props) => {

    const [year, setYear] = useState('All');
    const getYearFilter = (event) => {
        setYear(event.target.value)
    }
    props.onSelectFilter(year);
    return (
        <div style={{
            
                display: 'flex',
                justifyContent: 'end'}}>
            <span>
               <i> Filter The Product by year</i>
            </span>
            <select value={props.selected} onChange={getYearFilter}>
                <option>All</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
            </select>

        </div>
    );
}