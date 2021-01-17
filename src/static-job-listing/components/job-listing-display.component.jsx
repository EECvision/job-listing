import React,{useState} from 'react';

import JobListingMenu from './job-listing-menu.component';
import bgHeader from '../images/bg-header-desktop.svg';
import JOBDATA from '../data.json';
import FilterBar from './filter-bar.component';

const JobListingDisplay =()=>{
    const [data] = useState(JOBDATA);

    return (
        <div className="w-full flex flex-col items-center justify-start bg-blue-100">
            <img className="w-full bg-teal-600 h-40 opacity-75" src={bgHeader} alt="header-background"/>
            <FilterBar data={data}/>

            <JobListingMenu data={data}/>
        </div>
    )
}

export default JobListingDisplay;