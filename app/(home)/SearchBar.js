'use client';
import styles from './SearchBar.module.css'
import { useState } from 'react';
import Link from 'next/link';
import { HiMagnifyingGlass } from 'react-icons/hi2'


export default function SearchBar( {devices} ) {

    const [filteredData, setFilteredData] = useState([]);
    const [searchedDevice, setSearchedDevice] = useState('');


    const handleFilter = (event) => {
        const keyword = event.target.value
        setSearchedDevice(keyword)
        const newFilter = devices?.filter((value) => {
            return value.deviceName.toLowerCase().includes(keyword.toLowerCase())
        })
        setFilteredData(keyword === ''? [] : newFilter)
    }


    return (
        <div className={styles.searchBar}>
            <HiMagnifyingGlass className={searchedDevice.length === 0? styles.searchIcon : styles.searchIconActive} />
            <input type={'text'} value={searchedDevice} placeholder={'Search your Mobile Phone'} autoComplete={'nope'} onChange={handleFilter}></input>
            {filteredData?.length !=0 && 
            <div className={styles.results}>
                {filteredData?.slice(0, 7).map((device, key) => {
                    return <Link className={styles.item} href={`/${device.deviceId}`} key={device.deviceId} onClick={() => {
                        setSearchedDevice(device.deviceName)
                        setFilteredData([])
                        document.getElementById('pp').scrollIntoView({ behavior : 'smooth' })
                    }}>
                        <p>{device.deviceName}</p>
                    </Link>
                })}
            </div>}
        </div>
    )
}