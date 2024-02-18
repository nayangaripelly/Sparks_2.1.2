class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <h2>BeatMarket</h2>
                <div className="searchBar"><form action=""><input type="text" name="searchBar" /></form></div>
                <h2><a href="">profile</a></h2>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">sign up</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        );
    }
}
