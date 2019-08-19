import React from 'react';

const SearchBox  = ({searchfield, searchChange})=>{
    return(
        <div>
        <input
            className='search'
            type='search'
               placeholder='Search Contacts'
            onChange={searchChange}/>
        </div>
    )
}
export default SearchBox;