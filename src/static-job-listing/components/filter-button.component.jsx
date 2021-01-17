import React,{useContext} from 'react';

import FilterList from './filter-list.component';
import {FilterContext} from './filter-context';

const FilterButton =({data})=>{
    const {toggleFilterList, setToggleFilterList} = useContext(FilterContext);
    return (
        <div className="w-full flex flex-col items-start">
            <div
                onMouseOver={()=>setToggleFilterList(true)} 
                onMouseLeave={()=>setToggleFilterList(false)} 
                className="relative border border-black"
            >
                <button className="text-teal-900 border border-teal-300 rounded px-4 py-2">Filter by</button>
                    {
                        toggleFilterList
                        ? 
                            <FilterList data={data}/> 
                        : null
                    }
            </div>
        </div>
    )
}

export default FilterButton;