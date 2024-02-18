import React from 'react'

const Profile = () => {
    const ifArtist = true;
    const ifSame = true;
    return (
        <div>
            {/* Profile */}
            <h1 className="text-center">Profile</h1>
            {ifSame ?
                <Link to='/signin'>
                    Sign Out
                </Link>
                : ''}
            {/*  User Information */}
            <div>
                <img src="" alt="profile image"></img>
                {!ifSame ?
                    <div>
                        <p>Name: {Name}</p>
                        <Link to="/chat">
                            <button>Chat</button>
                        </Link>
                    </div> : ""}
                {ifSame ?
                    <div>
                        <div>
                            <input type="text" placeholder={Name}></input>
                            <button>Edit Name</button>
                        </div>
                        <div>
                            <input type="email" placeholder={Email}></input>
                            <button>Edit Email Id</button>
                        </div>
                        <div>
                            <input type="password" placeholder={password}></input>
                            <button>Edit Email Id</button>
                        </div>
                    </div> :
                    ""
                }
            </div>
            <div>
                {/* User Bio */}
                <h2>Bio</h2>
                {!ifSame ? <p>{bio}</p> : ""}
                {ifSame ?
                    <div>
                        <input type="textarea" placeholder={bio}></input>
                        <button>Edit Bio</button>
                    </div> :
                    ""
                }
            </div>
            {/* User Social Media Links */}
            <div>
                <h2>Social Media Links</h2>
                {!ifSame ?
                    <ul>
                        <li><a href="#"><img src="" alt="Spotify"></img></a></li>
                        <li><a href="#"><img src="" alt="Instagram"></img></a></li>
                        <li><a href="#"><img src="" alt="Discord"></img></a></li>
                    </ul>
                    : ""
                }
                {ifSame ?
                    <form onSubmit={handleAddLink}>
                        <label htmlFor="Spotify">Spotify</label>
                        <input type="url"></input>
                        <label htmlFor="Instagram">Spotify</label>
                        <input type="url"></input>
                        <label htmlFor="Discord">Spotify</label>
                        <input type="url"></input>
                    </form>
                    :
                    ""
                }
            </div>
            {/* Beat Sections */}
            <div>
                <h2>Spotlight Beats</h2>
                {favBeatList.length > 0 ?
                    beatList.map(beat => (
                        <BeatCard key={beat._id} beat={beat} />
                    )) : "No beats yet!"}
            </div>
            <div>
                {ifArtist ? <h2>All Bought Beats</h2> : <h2>All Created Beats</h2>}
                {beatList.length > 0 ?
                    beatList.map(beat => (
                        <BeatCard key={beat._id} beat={beat} />
                    )) : "No beats yet!"}
            </div>
            {ifSame && !ifArtist ?
                <div>
                    <Link to="/addBeat">
                        <button>Add Beats</button>
                    </Link>
                </div>
                :
                ""
            }
        </div>
    )
}
export default Profile