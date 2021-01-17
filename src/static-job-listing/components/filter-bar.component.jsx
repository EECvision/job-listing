import {useContext} from 'react';
import {FilterContext} from './filter-context';

// import FilterButton from './filter-button.component';

const FilterBar = ()=>{
    const {filterValue, setFilterValue} = useContext(FilterContext);

    return <div className="sticky top-0 mb-20 w-full flex flex-col items-center justify-center rounded z-10">
        <input 
            type="search" 
            value={filterValue} 
            placeholder="search by job position or role"
            onChange={(e)=>setFilterValue(e.target.value)}
            className="w-5/6 shadow-xl  bg-white outline-none focus:outline none p-3"/>
        {/* <FilterButton data={data}/> */}
    </div>
}

export default FilterBar;