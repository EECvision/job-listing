import React,{createContext, useState} from 'react';

export const FilterContext = createContext();

const FilterContextProvider =(props)=>{

    // const [toggleFilterList, setToggleFilterList] = useState(false);
    const [filterValue, setFilterValue] = useState('');

    return (
        <FilterContext.Provider value={{filterValue, setFilterValue}}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;