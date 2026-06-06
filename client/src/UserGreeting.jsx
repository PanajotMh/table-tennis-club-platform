import PropTypes from "prop-types"


function UserGreeting(props){

    const username = props.name ?? "Guest"
    const isLoggedIn = props.isLoggedIn ?? false

    //Nice format.
    const welcomeMessage = <h2 className="welcome-message"> 
                            Welcome {username}
                           </h2>

    const loginPrompt = <h2 className="login-prompt"> 
                            Please login to continue!
                        </h2>

    
    return (isLoggedIn ? welcomeMessage : loginPrompt)



    // if (props.isLoggedIn){
    //     return <h2 className="welcome-message"> Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2 className="login-prompt"> Please login to continue!</h2>
    // }
}

    // ternary version of statement.
    // return (props.isLoggedIn ? <h2> Welcome {props.username} </h2> :<h2> Please login to continue!</h2> );



export default UserGreeting