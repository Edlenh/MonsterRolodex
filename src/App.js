import { useState , useEffect } from 'react';

import CardList from './components/cardlist/card-list.component';
import SearchBox from './components/searchBox/searchbox.component';
import './App.css';


const App =()=>{
  const [searchField, setSearchField] = useState(''); //[value we went to store, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters)

  console.log('render')
  //useEffect takes two arguements. a cb and an array

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> setMonsters(users));
  }, [])
  //this array whenever it changes it will cb function.
  //will fire first when app runs. 
  //dependecy array.
  //since we dont want anything to change, this array will be empty
  //only call this function only on mount. 
  //nothing will cause to recall this fetch call other than the first time

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      //this is being rebuilt 
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setFilterMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange =(event)=>{
      const searchFieldString = event.target.value.toLocaleLowerCase();
          //whenever set state is called, render is called again > rerender
          setSearchField(searchFieldString)
      };

  return (
    <div className="App">
    <h1 className='my-title'>Monsters!</h1>
      <SearchBox onChangeHandler={onSearchChange} 
      placeholder='search monsters'
      className='monster-search-box'/>
      <CardList monsters={filterMonsters}/>
      </div>
  )
}

export default App;
