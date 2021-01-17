import eyecamCo from '../images/eyecam-co.svg';
import faceit from '../images/faceit.svg';
import insure from '../images/insure.svg';
import loopStudios from '../images/loop-studios.svg';
import manage from '../images/manage.svg';
import myhome from '../images/myhome.svg';
import photosnap from '../images/photosnap.svg';
import shortly from '../images/shortly.svg';
import theAirFilter from '../images/the-air-filter-company.svg';
import account from '../images/account.svg';

const JobListingItem =({company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages, tools})=>{
    const logos = {
        account: account,
        eyecamCo: eyecamCo,
        faceit: faceit,
        insure: insure,
        manage: manage,
        myhome: myhome,
        loopStudios: loopStudios,
        photosnap: photosnap,
        shortly: shortly,
        theAirFilter: theAirFilter
    }

    return (
        <div className={`w-full mb-10 lg:py-8 lg:px-10 px-6 bg-white border-l-4 rounded-lg ${isNew && featured ? "border-teal-500" : null} shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between`}>
                <img className="w-12 h-12 lg:w-24 lg:h-24 mr-2 transform -translate-y-1/2 lg:translate-y-0" src={logos[logo]} alt="logo"/>
                <div className="w-full max-w-sm mb-6 lg:mb-0 flex flex-col lg:items-start justify-between">
                    <div className="flex items-center justify-start">
                        <div className="text-teal-500 font-medium text-lg mr-6 ">{company}</div>
                        <div className="mr-2">
                            {
                                isNew 
                                ?  <div className="text-white text-xs font-bold px-3 py-1 bg-teal-500 rounded-full uppercase">new!</div>
                                : null
                            }
                        </div>
                        <div className="mr-2">
                            {
                                featured
                                ?  <div className="text-white text-xs font-bold px-3 py-1 bg-teal-900 rounded-full uppercase">Featured</div>
                                : null
                            }
                        </div>
                    </div>
                    <div className="flex items-center justify-start py-2 lg:p-0">
                        <div className="text-teal-900 lg:text-xl xl:text-2xl font-bold">{position}</div>
                    </div>
                    <div className="flex items-center justify-start text-gray-500 text-lg">
                        <div className="mr-6">{postedAt}</div>
                        <div className="mr-6 w-1 h-1 border-2 border-gray-500 rounded-full"></div>
                        <div className="mr-6">{contract}</div>
                        <div className="mr-6 w-1 h-1 border-2 border-gray-500 rounded-full"></div>
                        <div className="mr-6">{location}</div>
                    </div>
                </div>
                <div className="w-full max-w-lg py-4 flex flex-wrap items-center lg:justify-start xl:justify-end border-t border-teal-900 lg:border-white ">
                    <div className="mr-4 my-2 bg-blue-100 rounded text-center px-2 py-1 text-teal-500 font-medium">{role}</div>
                    <div className="mr-4 my-2 bg-blue-100 rounded text-center px-2 py-1 text-teal-500 font-medium">{level}</div>
                    <div className=" my-2">
                        {
                            tools.map((tool,idx)=>(
                                <span className="mr-4 bg-blue-100 rounded text-center px-2 py-1 text-teal-500 font-medium"
                                    key={idx}
                                >{tool}</span>
                            ))
                        }
                    </div>
                    <div className="my-2">
                        {
                            languages.map((lang,idx)=> (
                                <span className="mr-4 bg-blue-100 rounded text-center px-2 py-1 text-teal-500 font-medium" 
                                        key={idx}
                                >{lang}</span>
                            ))
                        }
                    </div>
                </div>
        </div>
    )
}

export default JobListingItem;