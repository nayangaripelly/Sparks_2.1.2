import React from 'react'

const BeatCard = (beat) => {
    return (
        <div>
            <img src={beat.cover}></img>
            <h2>{beat.title}</h2>
            {ifSpotlight ?
                <img src="" alt="Spotlight" className='grayscale'></img>
                : <img src="" alt="Spotlight" className='grayscale-0'></img>
            }
            <audio src={beat.audio}>Play Beat</audio>
            <h3>{beat.producer}</h3>
            <h4>{beat.price}</h4>
            {!ifSame ? 
                <Link to='/buyBeat'><button>Buy Beat</button></Link>
                :
                ""
            }
            <Link to="/chat">Chat and Negotiate</Link>
            {!ifArtist ?
                <button>Remove Beat</button>
                : null
            }
        </div>
    )
}

export default BeatCard