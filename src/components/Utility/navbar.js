import { Link } from "gatsby"
import React, { useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { FaMoon, FaSun } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"

import styled from "styled-components"

export default function Navbar({ toggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <StyledNav>
        <div className="logo">
          {isDark === "dark" ? (
            <FaSun onClick={toggleTheme} />
          ) : (
            <FaMoon onClick={toggleTheme} />
          )}
          {/* <AiFillSound /> */}
        </div>
        {isOpen ? (
          <AiOutlineClose
            onClick={() => setIsOpen(false)}
            className="hambuger"
          />
        ) : (
          <BiMenuAltRight
            onClick={() => setIsOpen(true)}
            className="hambuger"
          />
        )}
        {isOpen && (
          <div className="nav-items-sm">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>

              <li>
                <Link to="/about">about</Link>
              </li>

              <li>
                <Link to="/contact">contact</Link>
              </li>

            </ul>
          </div>
        )}

        <div className="nav-items-md">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>

            <li>
              <Link to="/about">about</Link>
            </li>

            <li>
              <Link to="/contact">contact</Link>
            </li>

          </ul>
        </div>
      </StyledNav>
    </div>
  )
}

const StyledNav = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 992px;
  padding: 2rem;
  .logo {
    color: ${props => props.theme.body.icon.foreground};
    margin: auto 0;
    z-index: 3;
    svg {
      padding-right: 1.5rem;
      cursor: pointer;
    }
  }
  .nav-items-sm,
  .hambuger {
    display: none;
  }
  .nav-items-md {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        display: inline;
        padding: 0 2rem;
        margin: 0 auto;
        a {
          color: ${props => props.theme.body.title.foreground};
          text-decoration: none;
          margin-bottom: 30px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .nav-items-md {
      display: none;
    }
    .hambuger {
      display: inline-block;
      color: ${props => props.theme.body.icon.foreground};
      height: 30px;
      width: 30px;
      z-index: 2;
    }
    .nav-items-sm {
      display: block;
      position: fixed;
      z-index: 1;
      padding: 2rem 1rem;
      width: 100%;

      ul {
        border: 1px solid ${props => props.theme.body.title.foreground};
        overflow: hidden;
        margin-right: 4rem;
        li {
          padding: 1rem;
          background-color: ${props => props.theme.body.title.foreground};
          border: 1px solid ${props => props.theme.body.title.foreground};
          text-align: center;
          color: ${props => props.theme.body.title.background};
          a {
            text-decoration: none;
            color: ${props => props.theme.body.button.foreground};
          }
        }
      }
    }
  }
`
