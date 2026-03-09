

function Button(){
    //we're within jsx code right now can't use dashes, all value strings and each property should be comma seperated
    const styles  = {
        backgroundColor: "hsl(310, 94%, 43%)",
        color: "white",
        padding: "10p 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    
    return(<button style = {styles}>Click me</button>)
}   // insert styles object that contains all of the css properties
// for className we use curly braces to use a dynamic value, our import of styles dot the name of the class (button in this case)

export default Button