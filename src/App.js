import JobListingDisplay from './static-job-listing/components/job-listing-display.component';
import FilterContextProvider from './static-job-listing/components/filter-context';

const App =()=>{
    return (
        <FilterContextProvider>
            <div className="w-full">
                <JobListingDisplay/>
            </div>
        </FilterContextProvider>
    )
}

export default App;
