import {getMovieActors} from 'Api/Api'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import {Image, List, ListItem} from './Cast.styled'

export const Cast = () => {
    const [actors, setActors] = useState (null);
    const {id} = useParams ();

    console.log(actors)
    useEffect (() => {
        getMovieActors(id).then(res => setActors(res.data.cast))
    }, [id])

    if (!actors) {
        return null
    }

    return (
        <List>
            {actors.map(({id, name, character, popularity, profile_path}) => (
                <ListItem key={id}>
                    <Image src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} loading='lazy' />
                    <h3>Name: {name}</h3>
                    <p>Charecter: {character}</p>
                    <p>Popularity: {popularity}</p>
                </ListItem>
            ))}
        </List>
    )
}