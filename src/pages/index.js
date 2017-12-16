import React from 'react'
import Link from 'gatsby-link'
import historical_homecrafters from './index/case_study.png'
import continue_wip from './index/continue_wip.png'
import tachyons from 'tachyons'

const IndexPage = () => (
  <div>
    <h1 className="f2-ns f3 w-100 w-50-ns"
      style={{
        paddingTop: '2rem',
        lineHeight: '1.25',
        color: '#022533',
      }}>
      Hi, I’m Jonathan Fisher, a web developer who enjoys the creative process.
    </h1>
    <div className="flex justify-between">
      <a href="https://dribbble.com/shots/3942531-Continue" className="case-study-container dib">
        <img src={continue_wip} className="case-study-thumb" />
      </a>
      <Link to="/page-2/" className="case-study-container dib">
        <img src={historical_homecrafters} className="case-study-thumb" />
      </Link>
    </div>
  </div>
)

export default IndexPage
