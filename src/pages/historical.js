import React from 'react'
import Link from 'gatsby-link'
import Tachyons from 'tachyons'
import historicalOne from './historical/historical_one.svg'
import historicalTwo from './historical/historicalTwo.png'
import historicalThree from './historical/historicalThree.png'


const SecondPage = () => (
  <div className="spectral measure-wide-ns center-ns">
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
      <img className="mb0 mt4" src={historicalOne} />
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
      <img className="w-50-ns" src={historicalTwo} />
      <img className="w-50-ns" src={historicalThree} />
    </div>
    <Link to="/" className="link dark-green dim fw7 spectral underline dib mb0 mt4">\\ Back To Home</Link>
  </div>
)

export default SecondPage
