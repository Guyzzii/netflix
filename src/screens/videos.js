import React from 'react'
import styled from 'styled-components'
import Header  from '../components/Header'
import GetAnimeHighestRated from '../components/GetAnimeHighestRated'
import GetAnimeMostPopular from '../components/GetAnimeMostPopular'
import GetAnimeTopUpcoming  from '../components/GetAnimeTopUpcoming'
import AnimeOp  from '../components/AnimeOp'
import Fade from 'react-reveal/Fade'; 

const Videos = () => {
  return (
    <Wrapper>
      <Header></Header>
      <AnimeOp></AnimeOp>
      <Fade left><Titlep>Les animés apprécié des utilisateur</Titlep></Fade>
      <GetAnimeTopUpcoming></GetAnimeTopUpcoming>
      <Titlep>Les animés les mieux noté</Titlep>
      <GetAnimeHighestRated></GetAnimeHighestRated>
      <Titlep>Les animés les plus populaire</Titlep>
      <GetAnimeMostPopular></GetAnimeMostPopular>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
`;

const Titlep = styled.h2`
  color: white;
  font-size: 15px;
  text-align: start;
  margin-left: 10px;
  margin-right: 10px;
`;


export default Videos