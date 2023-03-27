import styled from 'styled-components';
import { FaClinicMedical } from 'react-icons/fa';
import { Container } from '../../globalStyles';



export const Nav = styled.nav`
background: #3a0956;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`

export const NavBarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;


${Container}
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
font-size: 2rem;
text-decoration: none;
display: flex;
align-items: center;
`

export const NavIcon = styled(FaClinicMedical)`
margin-right: 0.5rem;
`