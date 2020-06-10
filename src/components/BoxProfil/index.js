import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BoxProfil = props => {
    return (
        <Link to='/videos'>
            <Box>
                <Image style={{ backgroundImage:`url(${props.image})` }}></Image>
                <Name>{props.name}</Name>
            </Box>
        </Link>
    );
};

const Box = styled.div`
    margin-top: 25px;
    width: 150px;
    height: 150px;
    text-align: center;
`;
const Image = styled.div`
    width: 80%;
    height: 80%;
    margin: auto;
    border-radius: 5%;
    background-size: cover;
`;
const Name = styled.p`
    margin: 0;
    font-size: 17px;
    color: white;
`;
export default BoxProfil;
