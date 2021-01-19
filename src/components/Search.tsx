import React from 'react'

interface Props  {
    searchquery:string;
    //setSearches?:string;
    handleSearch:any;
    handleSubmit?:any;
}

const Search: React.FC<Props> = ({searchquery, handleSearch, handleSubmit})=> {
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Type here..."onChange={handleSearch}></input>
            </form>
        </div>
    )
}

export default Search