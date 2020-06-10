import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { GrPlayFill } from "react-icons/gr";
import Fade from 'react-reveal/Fade';
import ReactPlayer from 'react-player'
import prevw from '../img/black.png';
import { IoMdCloseCircle } from "react-icons/io";
import {Link} from 'react-router-dom'

const Video = props => {
    const [detail, setDetails] = useState([])
    useEffect(() => {
      const generatedUrl = `https://kitsu.io/api/edge/anime?filter[slug]=${props.match.params.slug}`
      axios({
        method: 'GET',
        url: generatedUrl,
      }).then(res => {
        console.log('res.data.data', res.data.data)
        setDetails(res.data.data)
      }).catch(err => {
        console.log(err)
      })
    }, [])
    return (
        <Wrapper>
            <Cdiv>
                <Link to='/videos'>
                    <Closebutton  />
                </Link>
                {detail.map(anime =>
                    <Fade>
                        <Image style={{ backgroundImage:`url(${anime.attributes.posterImage.original})` }}>
                            <Shadow></Shadow>
                        </Image>
                        <Container>
                                <ImgLogo src={anime.attributes.posterImage.small} alt="poster" />
                                <List>
                                    <Item>Recommandé à {anime.attributes.averageRating} %</Item>
                                    <Item>2017</Item>
                                    <Item>2 saisons</Item>
                                </List>
                                <Buttonplay><Playbutton />Lecture</Buttonplay>
                        </Container>
                        <Text>{anime.attributes.synopsis}</Text>
                    </Fade>
                )}
            </Cdiv>
            <Cdiv>
                <Fade left>
                    <Containertwo>
                        <Lanevid>
                            <Videodiv>
                                <ReactPlayer 
                                    className='react-player' 
                                    url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                                    controls
                                    playing
                                    playIcon={<Playbuttonvid />}
                                    light={prevw}
                                    muted
                                />
                            </Videodiv>
                            <Videodivinfo>
                                <Textep>1. Titre de l'épisode</Textep>
                                <Soustext>22m</Soustext>
                            </Videodivinfo>
                            <Textres>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et iaculis metus. Sed non consequat mi, quis lobortis purus. Suspendisse viverra pulvinar nisi, non ornare tellus mollis nec. </Textres>
                        </Lanevid>
                        <Lanevid>
                            <Videodiv>
                                <ReactPlayer 
                                    className='react-player' 
                                    url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                                    controls
                                    playing
                                    playIcon={<Playbuttonvid />}
                                    light={prevw}
                                    muted
                                />
                            </Videodiv>
                            <Videodivinfo>
                                <Textep>1. Titre de l'épisode</Textep>
                                <Soustext>22m</Soustext>
                            </Videodivinfo>
                            <Textres>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et iaculis metus. Sed non consequat mi, quis lobortis purus. Suspendisse viverra pulvinar nisi, non ornare tellus mollis nec. </Textres>
                        </Lanevid>
                        <Lanevid>
                            <Videodiv>
                                <ReactPlayer 
                                    className='react-player' 
                                    url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                                    controls
                                    playing
                                    playIcon={<Playbuttonvid />}
                                    light={prevw}
                                    muted
                                />
                            </Videodiv>
                            <Videodivinfo>
                                <Textep>1. Titre de l'épisode</Textep>
                                <Soustext>22m</Soustext>
                            </Videodivinfo>
                            <Textres>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et iaculis metus. Sed non consequat mi, quis lobortis purus. Suspendisse viverra pulvinar nisi, non ornare tellus mollis nec. </Textres>
                        </Lanevid>
                        <Lanevid>
                            <Videodiv>
                                <ReactPlayer 
                                    className='react-player' 
                                    url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                                    controls
                                    playing
                                    playIcon={<Playbuttonvid />}
                                    light={prevw}
                                    muted
                                />
                            </Videodiv>
                            <Videodivinfo>
                                <Textep>1. Titre de l'épisode</Textep>
                                <Soustext>22m</Soustext>
                            </Videodivinfo>
                            <Textres>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et iaculis metus. Sed non consequat mi, quis lobortis purus. Suspendisse viverra pulvinar nisi, non ornare tellus mollis nec. </Textres>
                        </Lanevid>
                        <Lanevid>
                            <Videodiv>
                                <ReactPlayer 
                                    className='react-player' 
                                    url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                                    controls
                                    playing
                                    playIcon={<Playbuttonvid />}
                                    light={prevw}
                                    muted
                                />
                            </Videodiv>
                            <Videodivinfo>
                                <Textep>1. Titre de l'épisode</Textep>
                                <Soustext>22m</Soustext>
                            </Videodivinfo>
                            <Textres>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et iaculis metus. Sed non consequat mi, quis lobortis purus. Suspendisse viverra pulvinar nisi, non ornare tellus mollis nec. </Textres>
                        </Lanevid>
                        <Lanevid>
                            <Videodiv>
                                <ReactPlayer 
                                    className='react-player' 
                                    url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                                    controls
                                    playing
                                    playIcon={<Playbuttonvid />}
                                    light={prevw}
                                    muted
                                />
                            </Videodiv>
                            <Videodivinfo>
                                <Textep>1. Titre de l'épisode</Textep>
                                <Soustext>22m</Soustext>
                            </Videodivinfo>
                            <Textres>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et iaculis metus. Sed non consequat mi, quis lobortis purus. Suspendisse viverra pulvinar nisi, non ornare tellus mollis nec. </Textres>
                        </Lanevid>
                    </Containertwo>
                </Fade>
            </Cdiv>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  position: relative;
`;

const Cdiv = styled.div`
    position: relative;
    min-height: 560px;
`;

const Image = styled.div`
    width: 100%;
    height: 450px;
    background-size: cover;
    background-position: center;
    margin-right: 10px;
    margin-bottom: 35px;
    flex: 0 0 auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    filter: blur(15px);
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
    margin: 0 0 15px 0;
    padding: 0;
    width: 100%;
`;

const Item = styled.li`
    display: inline;
    color: #a3a3a3;
    margin: 0 15px;
    position: relative;
    &:nth-child(1) {
        color: #228B22;
        font-weight: 600;
    }
`;

const Container = styled.div`
    position: relative;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Containertwo = styled.div`
    width: 90%;
    margin: 15px auto;
`;

const Lanevid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
`;

const Videodiv = styled.div`
    position: relative;
    width: 40%;
    min-height: 104px;
`;

const Videodivinfo = styled.div`
    position: relative;
    width: 55%;
    text-align: start;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Buttonplay = styled.button`
  background-color: red;
  color: white;
  border: 0;
  border-radius: 2px;
  margin: 15px auto;
  width: 90%;
  height: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Playbuttonvid = styled(GrPlayFill)`
    filter: invert(1);
    transform: scale(1.5);
`

const Playbutton = styled(GrPlayFill)`
  margin: 0 5px;
  filter: invert(1);
`
const Closebutton = styled(IoMdCloseCircle)`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    filter: invert(0.7);
    margin: 0;
    transform: scale(1.6);
    cursor: pointer;
`

const ImgLogo = styled.img`
    width: 150px;
    margin: 0 auto 10px;
`;
const Textep = styled.p`
    color: white;
    font-size: 17px;
    margin: 0;
`;

const Textres = styled.p`
    color: #8a8a8a;
    font-size: 15px;
    width: 100%;
    margin: 5px 0;
    text-align: start;
`;

const Soustext = styled.span`
    color: #8a8a8a;
    font-size: 13px;
`;

const Text = styled.p`
    color: white;
    height: 100px;
    width: 90%;
    margin: 0 auto;
    text-align: start;
    font-size: 15px;
    overflow: auto;
        ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
        }
        ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
        }
        ::-webkit-scrollbar-thumb {
        background: #000000;
        border: 0px none #ffffff;
        border-radius: 50px;
        }
        ::-webkit-scrollbar-thumb:hover {
        background: #000000;
        }
        ::-webkit-scrollbar-thumb:active {
        background: #000000;
        }
        ::-webkit-scrollbar-track {
        background: #171717;
        border: 0px none #ffffff;
        border-radius: 50px;
        }
        ::-webkit-scrollbar-track:hover {
        background: #171717;
        }
        ::-webkit-scrollbar-track:active {
        background: #333333;
        }
        ::-webkit-scrollbar-corner {
        background: transparent;
        }
`;

export default Video;