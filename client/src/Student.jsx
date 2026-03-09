
// In order for this component to accepts props (properties) this function needs a props paramenter, where props is a js-object 
function Student(props){


    return(

        //Set of curly spaces to inject some js
        //Booleans do not work for some reason so use a ternary operator
        <div>
            <p>Name: {props.name}</p>
            <p>Age: Sponge bob is {props.age} years old.</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>



    )
}

export default Student