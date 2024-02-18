import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BeatCard = ({beat, ifSpotlight}) => {
    const ifSame=false;
    const ifArtist=true;
    return (
        <div className='bg-white w-40 flex flex-col mx-2 my-2 rounded-xl'>
            <img src={beat.img} className='h-40 '></img>
            <div className='p-3'>
                <h2 className='w-fit text-2xl'>{beat.name}</h2>
                {ifSpotlight ?
                    <img src="" alt="Spotlight" className='grayscale'></img>
                    : <img src="" alt="Spotlight" className='grayscale-0'></img>
                }
                <audio src={beat.audio || 'https://exmaple.com/audio/1'}>Play Beat</audio>
                <h3 className='text-sm text-gray-600 uppercase w-fit'>{beat.creator}</h3>
                {!ifSame ? 
                    <div className='bg-black text-white rounded-lg cursor-pointer'>
                        <ShoppingCartIcon />
                        <Link to='/buyBeat'>
                            <button>{beat.price?`$${beat.price}`:'Free'}</button>
                        </Link>
                    </div>
                    :
                    ""
                }
                <div className='cursor-pointer'>
                    <Link to="/chat">Chat</Link>
                </div>
                {!ifArtist ?
                    <button className='cursor-pointer'>Remove Beat</button>
                    : null
                }
                <div className='rounded-lg border-2 flex'>
                    <div className='border-r-2 w-full cursor-pointer'>
                        <FavoriteBorderIcon /> Like
                    </div>
                    <div className='w-16'>
                        {beat.likes}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeatCard