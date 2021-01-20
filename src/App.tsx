import React,{ChangeEvent, useState, useEffect} from 'react'
import Data from './games/lists.json'
import Search from './components/Search'

const App: React.FC=() => {

//Setting state here 
const [data] = useState(Data)
const [searchquery, setSearchQuery] = useState('')
const [searchArray, setSearchArray] = useState<string[]>([])

//console.log('loopposts',loopPosts)

useEffect(()=> {
  const storage:any = localStorage.getItem('Searches')
  const storageArray = JSON.parse(storage)
  //console.log('storage',storageArray)
  if(storageArray) {
    setSearchArray(storageArray)
  }
  //console.log('storageArray',searchArray)
},[])

const handleSearch = (e: ChangeEvent<HTMLInputElement>)=>{
  const searchTerm = e.target.value
  setSearchQuery(searchTerm)
  console.log(searchquery)
}

const handleSubmit = (e: ChangeEvent<HTMLInputElement>)=> {
  e.preventDefault()
  searchArray.push(searchquery)
  localStorage.setItem('Searches',JSON.stringify(searchArray))

  //console.log(searchArray)
}

return (
    <div className="app">

    <div className="wrapper">
      <header>
      <h1>{data.title}</h1>
      <Search searchquery={searchquery} handleSearch={handleSearch} handleSubmit={handleSubmit}  />
      </header>

      <span className="hr"></span>

      <p className="description">{data.description}</p>

      {!data.lists[0].items.filter(itm => itm.title.includes(searchquery)).length ? <div className="wrapper"><h2 className="no-result">No results found!</h2></div>:null}

      {/* Displaying the search-history here: */}
      {searchArray.length ? <span className="search-history">Search history:</span>:null}
      {searchArray.length ? searchArray.slice(Math.max(searchArray.length -10, 0)).map(query=>(
        <button key={Math.random()} className="search-list" onClick={()=> setSearchQuery(query)}>{query}</button>
      )):null}

      {/* Displaying json-data here: */}
      
      {data.lists[0].items.filter(itm => itm.title.includes(searchquery)).length ? <span className="list-title">{data.lists[0].title}</span>:null}
      {data.lists[0].items.filter(itm => itm.title.includes(searchquery)).map(game => (
        <div className="card" key={game.id}>
        <p><img src="./resources/roundel-copy-cat.png" className="game-img" alt="roundimage"/></p>
        <p className="game-title">{game.title}</p>
        </div>
      ))}

      {/* Displaying json-data here: */}  
      {data.lists[1].items.filter(itm => itm.title.includes(searchquery)).length ? <span className="list-title">{data.lists[1].title}</span>:null}
      {data.lists[1].items.filter(itm => itm.title.includes(searchquery)).map(game => (
        <div className="card" key={game.id}>
        <p><img src="./resources/roundel-copy-cat.png" className="game-img" alt="roundimage"/></p>
        <p className="game-title">{game.title}</p>
        </div>
      ))}

      {/* Displaying json-data here: */}
      {data.lists[0].items.filter(itm => itm.title.includes(searchquery)).length ? <span className="list-title">{data.lists[2].title}</span>:null}
      {data.lists[2].items.filter(itm => itm.title.includes(searchquery)).map(game => (
        <div className="card" key={game.id}>
        <p><img src="./resources/roundel-copy-cat.png" className="game-img" alt="roundimage"/></p>
        <p className="game-title">{game.title}</p>
        </div>
      ))}
    
    </div>
    </div>
  )
}

export default App
