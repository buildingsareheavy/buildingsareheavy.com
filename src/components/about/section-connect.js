import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'
import CTA from '../global/cta'
import Connect from './assets/connect.svg'

const ConnectContainer = styled.div`
  margin: ${rhythm(1.5)};
  span {
    font-weight: 900;
  }
`

const ConnectList = styled.ul`
  margin-top: 30px;
  li {
    border-bottom: 1px solid #333;
    width: 70%;
    :last-child {
      border-bottom: none;
    }
    a {
      color: #333;
    }
    @media screen and (max-width: 701px) {
      font-size: ${rhythm(0.5)};
    }
  }
`

const ConnectSection = () => (
  <ConnectContainer className="grid-connect">
    <div className="cell">
      <h3>Connect:</h3>
      <p>
        When I post something on my <Link to="/blog/">blog</Link>, I will make
        sure to share something about it on my{' '}
        <a
          href="https://www.instagram.com/buildingsareheavy/"
          target="_blank"
          rel="noopener"
        >
          Instagram
        </a>
        .
      </p>
      <p>
        I have all my most recent projects on my{' '}
        <a
          href="https://github.com/buildingsareheavy"
          target="_blank"
          rel="noopener"
        >
          Github
        </a>
        , as well as host my daily projects on{' '}
        <a
          href="https://codepen.io/buildingsareheavy/#"
          target="_blank"
          rel="noopener"
        >
          Codepen
        </a>
        .
      </p>
      <p>
        If you prefer email, you can always reach me at{' '}
        <a href="mailto:hello@buildingsAreHeavy.com">
          hello@buildingsAreHeavy.com
        </a>
      </p>
    </div>
    <div className="cell">
      <CTA
        bg={Connect}
        content={
          <ConnectList>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com/buildingsareheavy/"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/buildingsareheavy"
                target="_blank"
                rel="noopener"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/buildingsareheavy/#"
                target="_blank"
                rel="noopener"
              >
                Codepen
              </a>
            </li>
            <li>
              <a href="mailto:hello@buildingsAreHeavy.com">Email</a>
            </li>
          </ConnectList>
        }
      />
    </div>
  </ConnectContainer>
)

export default ConnectSection
