import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import BoxPoster from '../components/BoxPoster'
import styled from 'styled-components'
import { GrSearch } from "react-icons/gr";

const Search = () => {
    const timer = useRef(false)
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    useEffect(() => {
        const generatedUrl = `https://kitsu.io/api/edge/anime?filter[text]=${query}`

        clearTimeout(timer.current)

        timer.current = setTimeout(() => {
            axios({
                method: 'GET',
                url: generatedUrl,
                    }).then(res => {
                        console.log('res.data.data', res.data.data)
                        setResults(res.data.data)
                    }).catch(err => {
                        console.log(err)
                })
        }, 500)

    }, [query])
    return (
        <Wrapper>
            <Containernd>
                <Searchbutton />
                <Input type="text" onChange={e => setQuery(e.target.value)} />
                <Link to='/videos'>
                    <Text>Annuler</Text>
                </Link>
            </Containernd>
            <Container>
                {results.map(anime =>
                    <Link to={`/video/${anime.attributes.slug}`}>
                        <BoxPoster key={anime.id}
                            image={anime.attributes.posterImage.tiny}
                        />
                    </Link> 
                )}
            </Container>
        </Wrapper>
    );
};

const Input = styled.input`
    position: relative;
    width: 75%;
    padding: 6px 0 6px 30px;
    border-radius: 2px;
    border: none;
    color: white;
    background-color: #3a3a3a;
    :focus {
        outline: none;
    }
`;
const Text = styled.p`
    width: 10%;
    color: white;
    margin: 0 10px;
`;

const Wrapper = styled.section`
  position: relative;
`;

const Containernd = styled.section`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  margin: 10px;
  align-items: center;
`;


const Container = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

const Searchbutton = styled(GrSearch)`
    position: absolute;
    left: 3px;
    top: 0;
    bottom: 0;
    margin: auto 5px;
    filter: invert(1);
    transform: scale(1);
    z-index: 2;
`
export default Search;