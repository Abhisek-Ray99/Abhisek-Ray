import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    width: 95vw;
    height: 10vh;
`

export const Mode = styled.div`

`

export const Logo = styled.h1`
    color: #000;
`

export const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 2em;
    text-align: center;
`;

export const Hamberger = styled.div`
    display: flex;
    flex-direction: column;
    & span{
        width: 30px;
        height: 3px;
        background-color: #000;
        margin: 5px;
        border-radius: 7px;
       }
`