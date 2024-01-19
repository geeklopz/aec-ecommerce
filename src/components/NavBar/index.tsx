import styled from 'styled-components'
// import CartButtons from '../CartButtons'
import logo from '../../assets/logo.svg'
// import { MenuIcon } from './MenuIcon'
// import { NavLinks } from './NavLinks'

const Nav = () => {
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
        <img src={logo} alt='logo' className='main-img' />
          {/* <MenuIcon /> */}
        </div>
        {/* <NavLinks className='nav-links' /> */}
      </div>
      {/* <CartButtons /> */}
    </NavContainer>
  )
}

export default Nav

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25b2e3;

  .nav-center {
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      /* original margin-left: -15px */
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    img{
      margin-left: 15px;

    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`