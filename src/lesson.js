import react from "react";
import './App.css';
import { useState, useEffect } from "react";
import CardList from './components/Card-list/card-list.component'

const url = 'https://jsonplaceholder.typicode.com/users';

const Lesson = () => {
    const [monster, setMonster] = useState([]);
    const [searchField, setSearchField] = useState('');

    const fetchUser = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setMonster(users);
    };

    useEffect(() => {
        fetchUser();
    }, []);

  
    const onSearchChange = (event) => {
        const searchField = event.target.value;
        setSearchField(searchField);
    };

    const filteredMonsters = monster.filter((monster) =>{
         const {name} = monster;
        return name.toLowerCase().includes(searchField);
    });

    return (
        <div className="App">
            <input type='search'
                className='search-box'
                placeholder='search monsters'
                value={searchField}
                onChange={onSearchChange} />

            {/* {filteredMonsters.map((monster) => {
                const { id, name } = monster;
                return (
                    <div key={id}>
                        <h1>{name}</h1>
                    </div>
                )
            })} */}

            <CardList />
        </div>
    )
};

export default Lesson;