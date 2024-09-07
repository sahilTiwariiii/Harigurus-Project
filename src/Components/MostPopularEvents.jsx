import React from 'react'
import "../styles/MostPopularEvents.css"
import CardComponent from './CardComponent'
const MostPopularEvents = () => {
  return (
    <>
    <section className='mossandboosandkoos'>
        <div className="mostandmaincontainer">
            <div className="firstmostandmainbox">
                <h1 className='moemoe'>Most Popular Events</h1>
                <div className="orangeline"></div>
                <p className="poepoe">Check out the most in-demand events for your easy reference to book our services today!</p>
            </div>
            <div className="cardcomponentsecondmainbox">
                {/* Component */}
                <CardComponent/>
            </div>
        </div>
    </section>
    </>
  )
}

export default MostPopularEvents