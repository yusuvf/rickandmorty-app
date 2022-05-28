import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Character from '../components/character';
import { useGetLocationByIDQuery } from '../services/location';

const Residents = () => {
    let params: any = useParams();
    const { data, error, isLoading } = useGetLocationByIDQuery(params.locationId);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        let characters: any = data?.residents.map((resident: any, key: any) => <Character key={key} id={resident.substring(resident.lastIndexOf('/') + 1)} />)
        setCharacters(characters);
    }, [data])

    return (
        isLoading ? <div>Loading...</div> : <div>{characters}</div>
    )
}

export default Residents;