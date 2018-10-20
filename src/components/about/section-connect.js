import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'
import CTA from '../global/cta'

const ConnectContainer = styled.div`
  border: 1px solid black;
  margin-top: -1px;
  span {
    font-weight: 900;
  }
`

const ConnectList = styled.ul`
  border: 2px solid red;
  li {
    border-bottom: 1px solid black;
    :last-child {
      border-bottom: none;
    }
  }
`

const ConnectSection = () => (
  <ConnectContainer>
    <h2>Connect</h2>
    <p>
      If I have a new post on my <Link to="/blog/">blog</Link>, I will always
      post on{' '}
      <a href="https://www.instagram.com/buildingsareheavy/">Instagram</a>.
    </p>
    <p>
      I have my most recent projects on my{' '}
      <a href="https://github.com/buildingsareheavy">Github</a>, and host all my
      daily-projectson my{' '}
      <a href="https://codepen.io/buildingsareheavy/#">Codepen</a>.
    </p>
    <p>
      If you prefer email, you can always reach me at{' '}
      <a href="mailto:hello@buildingsAreHeavy.com">
        hello@buildingsAreHeavy.com
      </a>
    </p>

    <CTA
      bg="https://via.placeholder.com/350x150"
      content={
        <ConnectList>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a href="https://www.instagram.com/buildingsareheavy/">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/buildingsareheavy">Github</a>
          </li>
          <li>
            <a href="https://codepen.io/buildingsareheavy/#">Codepen</a>
          </li>
          <li>
            <a href="mailto:hello@buildingsAreHeavy.com">Email</a>
          </li>
        </ConnectList>
      }
    />
  </ConnectContainer>
)

export default ConnectSection
