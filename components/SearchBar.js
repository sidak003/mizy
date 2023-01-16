'use client';
import search from './searchBar.module.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const data = [
    {'id':1, 'name':'Redmi Note 5'},
    {'id':2, 'name':'Samsung Galaxy S21FE'},
    {'id':3, 'name':'Apple iPhone 12'},
    {'id':4, 'name':'Oppo Reno 8'},
    {'id':5, 'name':'Nothing Phone 1'},
    {'id':5, 'name':'OnePlus 11R'},
]

export default function SearchBar() {

    const router = useRouter()
    const [filteredData, setFilteredData] = useState([]);
    const [searchedItem, setSearchedItem] = useState('');


    const handleFilter = (event) => {
        const keyword = event.target.value
        setSearchedItem(keyword)
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(keyword.toLowerCase())
        })
        setFilteredData(keyword === ''? [] : newFilter)
    }


    const fillChoice = (itemName) => {
        setSearchedItem(itemName)
        setFilteredData([])
    }


    return (
        <div className={search.searchBar}>
            <input type={'text'} value={searchedItem} placeholder={'Search your Device'} onChange={handleFilter}></input>
            <div className={search.searchButton} onClick={()=>{
                if(searchedItem !== '') router.push(`${searchedItem.replaceAll(' ', '-')}`)
            }}>
                <FontAwesomeIcon className={search.searchIcon} icon={faMagnifyingGlass} />
            </div>
            {filteredData.length !=0 && <div className={search.results}>
                {filteredData.slice(0, 7).map((item, key) => {
                    return <div className={search.item} key={key} onClick={() => fillChoice(item.name)}><p>{item.name}</p></div>
                })}
            </div>}
        </div>
    )
}