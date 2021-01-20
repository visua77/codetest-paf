import React from 'react'

interface Props  {
    searchquery:string;
    //setSearches?:string;
    handleSearch:any;
    handleSubmit?:any;
}

const Search: React.FC<Props> = ({searchquery, handleSearch, handleSubmit})=> {
    return(
        <nav>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search"></label>
                <input placeholder="Type here..."onChange={handleSearch} id="search"></input>
            </form>
        </nav>
    )
}

export default Search