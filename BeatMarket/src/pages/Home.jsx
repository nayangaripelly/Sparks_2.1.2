import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import beatsArray from '../Beats.json'
import BeatCarousel from '../components/BeatCarousel';

const Home = () => {
    const [filterInstrument, setFilterInstrument] = useState('');
    const [filterMood, setFilterMood] = useState('');

    const promotedBeats = beatsArray.filter(beat => beat.promoted > 0);
    promotedBeats.sort((a, b) => b.promoted - a.promoted);

    const newBeats = beatsArray.sort((beat1, beat2) => {
        const releaseDate1 = new Date(beat1.releaseDate);
        const releaseDate2 = new Date(beat2.releaseDate);
        return releaseDate1 - releaseDate2;
    });

    const topBeats = beatsArray.sort((a, b) => (a.likes-b.likes));
    topBeats.reverse();

    const freeBeats = beatsArray.filter(beat => beat.price === 0);

    return (
        <div className='py-6 px-16 bg-gray-100 flex h-fit'>
            <div className='w-1/5 min-w-fit h-fit sticky top-0'>
                <SideBar />
            </div>
            <div className='w-4/5 max-w-4/5 p-3 px-8 mx-2 shadow-sm shadow-slate-300'>
                <BeatCarousel type={'Promoted'} beats={promotedBeats} />
                <BeatCarousel type={'Top'} beats={topBeats} />
                <BeatCarousel type={'New'} beats={newBeats} />
                <BeatCarousel type={'Free'} beats={freeBeats} />
            </div>
        </div>
    )
}

export default Home