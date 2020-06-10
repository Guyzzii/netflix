import React from 'react';
import styled from 'styled-components'
import logo from '../../img/nlogo.png'; 
import {Link} from 'react-router-dom'
import { GrSearch } from "react-icons/gr";

const Header = props => {
    return (
        <Headerdiv>
            <ImgLogo src={logo} alt="Logo" />
            <Pgenre>Animés</Pgenre>
            <Link to='/search'>
                <Searchbutton />
            </Link>
        </Headerdiv>
    );
};

const Searchbutton = styled(GrSearch)`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 25px;
    filter: invert(1);
    transform: scale(1.2);
`

const Headerdiv = styled.div`
    display: flex;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    padding: 15px;
    background: linear-gradient(to top,rgba(255,255,255,0) 0%,rgba(0,0,0,0.50) 40%);
    height: 53px;
`;

const ImgLogo = styled.img`
    width: 50px;
    margin-right: 10px;
`;

const Pgenre = styled.p`
    color: white;
    font-weight: 600;
`;

export default Header;
