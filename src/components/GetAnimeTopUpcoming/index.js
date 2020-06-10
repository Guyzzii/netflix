import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BoxPoster from '../BoxPoster'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'; 
import {Link} from 'react-router-dom'

const GetAnimeTopUpcoming = props => {
  const [AnimeHighestRatedList, setAnimeHighestRatedList] = useState([])
  useEffect(() => {
    const generatedUrl = 'https://kitsu.io/api/edge/anime'
    const sortingby = '-favoritesCount'
    axios({
      method: 'GET',
      url: generatedUrl,
      params: {
        sort:sortingby
      }
    }).then(res => {
      console.log('res.data.data', res.data.data)
      setAnimeHighestRatedList(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return ( 
    <Container>
      {AnimeHighestRatedList.map(anime =>
        <Fade>
          <Link to={`/video/${anime.attributes.slug}`}>
            <BoxPoster key={anime.id}
              image={anime.attributes.posterImage.tiny}
            />
          </Link> 
        </Fade> 
      )}
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  min-height: 181px;
  margin-left: 10px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default GetAnimeTopUpcoming