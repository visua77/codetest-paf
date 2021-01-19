import React,{ChangeEvent, useState, useEffect} from 'react'
import Data from './games/lists.json'
import Search from './components/Search'


const App =() => {

//Setting our state with imported json  
const [data] = useState(Data)

const [loopPosts, setLoopPosts] = useState<any>(Data)
const [searchquery, setSearchQuery] = useState('')

const [searchArray, setSearchArray] = useState<string[]>([])

useEffect(()=>{

const fetchLoop = (page:number)=> {
  
    const fetchRes = data.lists[page]
    setLoopPosts([...loopPosts.lists, fetchRes])
    //setLoopPosts(prev => [...prev, fetchRes])
  }
  
  [1,2,3].forEach(page => fetchLoop(page))
  const test = loopPosts.lists.flat()
  console.log('test',test)


},[])

console.log('loopposts',loopPosts)

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
  //let searchesArray:string[] = []
  setSearchQuery(searchTerm)
  //searches.push(searchTerm)
  console.log(searchquery)
}

const handleSubmit = (e: ChangeEvent<HTMLInputElement>)=> {
  e.preventDefault()
  searchArray.push(searchquery)
  localStorage.setItem('Searches',JSON.stringify(searchArray))
  //searchArray.push(searchquery)
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

      {/* Displaying the search-history here: */}
      {searchArray.length ? <span>No of items: {searchArray.length}</span>:null}
      {searchArray.length ? searchArray.slice(0,10).map(query=>(
        <span key={query} className="search-list">{query}</span>
      )):null}

      
      <span className="list-title">{data.lists[0].title}</span>
      {data.lists[0].items.map(game => (
        <div className="card" key={game.id}>
        <p><img src="./resources/roundel-copy-cat.png" className="game-img" alt="roundimage"/></p>
        <p className="game-title">{game.title}</p>
        </div>
      ))}

      <span className="list-title">{data.lists[1].title}</span>
      
      {data.lists[1].items.map(game => (
        <div className="card" key={game.id}>
        <p><img src="./resources/roundel-copy-cat.png" className="game-img" alt="roundimage"/></p>
        <p className="game-title">{game.title}</p>
        </div>
      ))}

      <span className="list-title">{data.lists[2].title}</span>
      
      {data.lists[2].items.map(game => (
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
