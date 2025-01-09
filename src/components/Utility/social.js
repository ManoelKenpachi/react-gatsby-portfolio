import React from "react"
import styled from "styled-components"
import { FaYoutube, FaLinkedinIn } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { AiOutlineGithub } from "react-icons/ai"

const sociallinks = {
  facebook: "https://www.facebook.com/profile.php?id=100009496969668",
  twitter: "https://twitter.com",
  instagram: "https://www.instagram.com/manoelkenpachi/",
  linkedin: "https://www.linkedin.com/in/manoel-silva-20936815a/",
  github: "https://github.com/ManoelKenpachi",
  youtube: "https://www.youtube.com",

  target: "blank",
}

export default function Social() {
  return (
    <StyledSocial>
      <a href={sociallinks.linkedin} target="_blank" rel="noreferrer">
        <FaLinkedinIn className="linkedin" />
      </a>
      <a href={sociallinks.github} target="_blank" rel="noreferrer">
        <AiOutlineGithub className="github" />
      </a>
      <a href={sociallinks.youtube} target="_blank" rel="noreferrer">
        <FaYoutube className="youtube" />
      </a>
      <a href={sociallinks.instagram} target="_blank" rel="noreferrer">
        <GrInstagram className="instagram" />
      </a>
    </StyledSocial>
  )
}

const StyledSocial = styled.section`
  svg {
    color: ${props => props.theme.body.icon.foreground};
    height: 25px;
    width: 25px;
    cursor: pointer;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    transition: 0.5s ease;
    padding: 0.5rem;
    border-style: solid;
    border-width: 0;
    border-color: rgba(255, 255, 255, 0.16);
  }
  .linkedin :hover {
    color: #0e76a8;
  }
  .github :hover {
    color: #4078c0;
  }
  .youtube :hover {
    color: #ff0000;
  }
  .instagram:hover {
    color: #e1306c;
  }
`
