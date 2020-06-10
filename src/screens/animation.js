import React, { useState } from 'react'
import axios from 'axios'
import BoxPoster from '../components/BoxPoster'

const Animation = props => {
  const [AnimeHighestRatedList, setAnimeHighestRatedList] = useState([])
  useState(() => {
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
    <div>
      {AnimeHighestRatedList.map(anime =>
        <BoxPoster
          image={anime.attributes.posterImage.small}
        /> 
      )}
    </div>
  )
}

export default Animation