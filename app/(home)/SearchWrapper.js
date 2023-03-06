import SearchBar from "./SearchBar";


async function getDevices() {
    try {
        const res = await fetch(`${process.env.clientApii}/getdevices`)
        if(!res.ok) throw new Error('Error Bad Response')
        return await res.json()
    } catch(err) {
        console.log(err)
    }
}


export default async function SearchWrapper() {
    const devices = await getDevices()
    return (
        <SearchBar devices={devices} />
        // <SearchBar devices={[{"deviceId":1,"deviceName":"Samsung Galaxy S21FE"},{"deviceId":2,"deviceName":"Apple iPhone 12"},{"deviceId":3,"deviceName":"Oppo Reno 8"},{"deviceId":4,"deviceName":"Redmi Note 12 Pro + 5G"},{"deviceId":5,"deviceName":"Realme 7"},{"deviceId":6,"deviceName":"OnePlus 9T"},{"deviceId":7,"deviceName":"Poco X2"},{"deviceId":8,"deviceName":"Apple iPhone 12 Pro"}]}/>
    )
}