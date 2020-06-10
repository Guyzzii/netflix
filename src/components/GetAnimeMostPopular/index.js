import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BoxPoster from '../BoxPoster'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const GetAnimeMostPopular = props => {
  const [AnimeHighestRatedList, setAnimeHighestRatedList] = useState([])
  useEffect(() => {
    const generatedUrl = 'https://kitsu.io/api/edge/anime'
    const sortingby = 'popularityRank'
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
        <Link to={`/video/${anime.attributes.slug}`}>
          <BoxPoster key={anime.id}
            image={anime.attributes.posterImage.tiny}
          />
        </Link> 
      )}
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-left: 10px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default GetAnimeMostPopular