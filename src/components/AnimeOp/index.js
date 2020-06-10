import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { GrPlayFill } from "react-icons/gr";
import logotitle from '../../img/logoonepiece.png';
import Fade from 'react-reveal/Fade'; 
import {Link} from 'react-router-dom'

const AnimeOp = props => {
  const [AnimeHighestRatedList, setAnimeHighestRatedList] = useState([])
  useEffect(() => {
    const generatedUrl = 'https://kitsu.io/api/edge/anime?filter[text]=one%20piece&page[limit]=1'
    axios({
      method: 'GET',
      url: generatedUrl,
    }).then(res => {
      console.log('res.data.data', res.data.data)
      setAnimeHighestRatedList(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return ( 
    <Cdiv>
      {AnimeHighestRatedList.map(anime =>
        <Fade>
          <Image style={{ backgroundImage:`url(${anime.attributes.posterImage.original})` }}>
              <Shadow></Shadow>
              <Container>
                  <ImgLogo src={logotitle} alt="Logo-Op" />
                  <List>
                      <Item>Aventure</Item>
                      <Item>Comédie</Item>
                      <Item>Fantasy</Item>
                  </List>
                  <Link to={`/video/${anime.attributes.slug}`}>
                    <Buttonplay><Playbutton />Lecture</Buttonplay>
                  </Link>
              </Container>
          </Image>
        </Fade>
      )}
    </Cdiv>
  )
}

const Cdiv = styled.div`
  min-height: 585px;
`;

const Image = styled.div`
    width: 100%;
    height: 550px;
    background-size: cover;
    background-position: center;
    margin-right: 10px;
    margin-bottom: 35px;
    flex: 0 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 90%);
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
`;

const Item = styled.li`
    display: inline;
    color: white;
    margin: 0 7px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: 3px;
      height: 3px;
      background-color: rgba(255,255,255,0.5);
      border-radius: 100%;
      right: -8px;
      top: 5px;
      bottom: 0;
      margin: auto;
    }
`;

const Container = styled.div`
    position: relative;
`;

const Buttonplay = styled.button`
  background-color: white;
  border: 0;
  border-radius: 2px;
  margin: 15px auto;
  width: 120px;
  height: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Playbutton = styled(GrPlayFill)`
  margin: 0 5px;
`

const ImgLogo = styled.img`
  width: 250px;
  margin-bottom: 10px;
`;

export default AnimeOp