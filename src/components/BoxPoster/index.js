import React from 'react';
import styled from 'styled-components'

const BoxPoster = props => {
    return (
        <Image style={{ backgroundImage:`url(${props.image})` }}></Image>
    );
};

const Image = styled.div`
    width: 110px;
    height: 156px;
    background-size: cover;
    margin-right: 10px;
    margin-bottom: 10px;
    flex: 0 0 auto;
`;

export default BoxPoster;
