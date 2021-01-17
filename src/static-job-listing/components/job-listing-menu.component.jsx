import {useContext} from 'react';
import {FilterContext} from './filter-context';
import JobListingItem from './job-listing-item.component';

const JobListingMenu=({data})=>{
    const {filterValue} = useContext(FilterContext);
    const filteredData = data
    .filter(data=> data.role.toLowerCase()
    .includes(filterValue.toLocaleLowerCase()) ||
            data.level.toLowerCase()
    .includes(filterValue.toLocaleLowerCase()))    

    return(
        <div className="w-full flex flex-col items-center px-8 lg:px-24 ">
            {
                filteredData.map(({id, ...otherProps}) =>{
                    return <JobListingItem key={id} {...otherProps}/>
                })
            }
        </div>
    )
}

export default JobListingMenu;

