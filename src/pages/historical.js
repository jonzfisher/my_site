import React from 'react'
import Link from 'gatsby-link'
import Tachyons from 'tachyons'
import styled from 'styled-components'
import historicalOne from './historical/historical_one.svg'
import historicalTwo from './historical/historicalTwo.png'
import historicalThree from './historical/historicalThree.png'
import trello_board from './historical/trello_board.png'
import figma_draft from './historical/figma_draft.png'

const ColorSwatchRed = styled.span`
	width: 0.75rem;
  height: 0.75rem;
  display: inline-block;
	background-color: #471D1D;
  box-shadow: 0 1px 2px 0 gray;
`;

const ColorSwatchDarkRed = styled.span`
	width: 0.75rem;
  height: 0.75rem;
  display: inline-block;
	background-color: #2E0F0F;
  box-shadow: 0 1px 2px 0 gray;
`;


const SecondPage = () => (
  <div className="spectral mw7-ns center-ns">
    <h1 className="mt5 mb2 f1">A Case Study: Historical Homecrafters</h1>
    <a href="http://historicalhomecrafters.com/"
      className="link dark-green dim fw7 spectral underline mt0">
      \\ View Site
    </a>
    <p className="f4 mb0 mt4">
      Historical Homecrafters has been a custom home-building
      business in Birmingham since before I was born, and the owner
      has studied historic, southern-styled architecture from Alabama
      to the Carolinas. They build, renovate, and consult for buyers
      as well as other builders.
    </p>
    <div className="w-100-ns">
      <img className="mb0 mt4 shadow-5" src={historicalOne} />
    </div>
    <h3 className="fw7 f4 mb0 mt4">The Project</h3>
    <p className="f4 mb0 mt2">
      The site needed a redesign with the following being most important
      to Historical Homecrafters: a redesign for more mobile responsiveness,
      a clearer flow to make contact, and consideration for SEO.
    </p>
    <h3 className="fw7 f4 mb0 mt4">The Constraints</h3>
    <p className="f4 mb0 mt2">
      Timeline: <span className="i">30-35 hours</span> (!)<br />
      A priority for large text and readability<br />
      Approachable to non-tech world
    </p>
    <h3 className="fw7 f4 mb0 mt4">The Audience</h3>
    <p className="f4 mb0 mt2">
      A large age-range, but usually not first-time homebuyers. Age 45
      and above, all local to the Jefferson County area.
    </p>
    <h3 className="fw7 f4 mb0 mt4">The Priorities</h3>
    <p className="f4 mb0 mt2">
      Have a clear call-to-action for contacting Historical Homecrafters.
      The owner is an honor to work with, so the faster I can start the
      conversation between him and the interested party, the better.
    </p>
    <p className="f4 mb0 mt2">
      Another is that I wanted to bring a gridded structure that would
      be consistent across breakpoints, and that within this structure
      the houses built in the past would be large (and optimized) and
      apparent throughout the site.
    </p>
    <div className="w-100-ns mb0 mt4">
      <img className="w-50-ns shadow-5" src={historicalTwo} />
      <img className="w-50-ns shadow-5" src={historicalThree} />
    </div>
    <h3 className="fw7 f4 mb0 mt4">The Process</h3>
    <p className="f4 mb0 mt2">
      After listing out all the ideas that I’d like to apply to the site, I
      began placing all of them against their worst enemy: the aforementioned
      constraints and priorities. Many of them survived the battle, and I
      worked to include the ones I felt had the largest value adds, knowing
      that the smarter I executed, the more interesting stuff I could
      include.
    </p>
    <div className="w-100-ns mb0 mt4">
      <img className="w-100-ns shadow-5" src={trello_board} />
    </div>
    <h3 className="fw7 f4 mb0 mt4">The Type</h3>
    <p className="f4 mb0 mt2">
      Accessibility is important in order to account for large age-ranges,
      so I value a large contrast ratio. Our main site colors (
      <span className="i">#471D1D</span> and
      <span className="i"> #FFFFD9</span>) have a 14.1:1 contrast ratio, which is good at any
      reasonably-sized font size. All text on the site meet the AAA WCAG
      standard.
    </p>
    <p className="f4 mb0 mt2">
      The fonts I use are Avenir and Athelas, a sans-serif and serif font,
      respectively. Avenir is used for clear calls-to-action while Athelas is
      mainly used for readable copy.
    </p>
    <h3 className="fw7 f4 mb0 mt4">The Color</h3>
    <p className="f4 mb0 mt2">
      The two main background colors that make up the site are gradients with
      small tweaks in saturation, and brightness. The hue however stayed the
      same for both darker reds (#471D1D <ColorSwatchRed /> and #2E0F0F
      <ColorSwatchDarkRed />). This ends up helping the copy, through trick
      of the eye, to jump off the screen a bit and gives the rendering
      a sheen. This enabled me to give the site a newness without having to be
      too adventurous for a client.
    </p>
    <div className="w-100-ns mb0 mt4">
      <img className="w-100-ns shadow-5" src={figma_draft} />
    </div>
    <h3 className="fw7 f4 mb0 mt4">The Result</h3>
    <p className="f4 mb0 mt2">
      There are many things I continue to learn (e.g. man, should I have used a
      static site generator to speed up this process and spend more time on
      design decisions), but I unexpectedly enjoyed the tradeoffs I made in
      order to serve the client.
    </p>

    <Link to="/" className="link dark-green dim fw7 spectral underline dib mb0 mt4">
      \\ Back To Home
    </Link>
  </div>
)

export default SecondPage
