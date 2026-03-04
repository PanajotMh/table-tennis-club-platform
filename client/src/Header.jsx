function Header(){
    return(
        <header>
            <h1> Table Tennis MS </h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#"> About</a> </li>
                    <li><a href="#"> Services</a> </li>
                    <li><a href="#"> Contact</a> </li>
                </ul>
            </nav>
            <hr></hr>
        </header>

    );
}

export default Header 

//export it so we can use it in other places of our project
//within our Header function we can write a mixture of HTML/Javascript
//return() only HTML content