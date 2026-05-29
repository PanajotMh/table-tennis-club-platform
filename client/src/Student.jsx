
//defaultProps = default values for props in case they are not passed from the parent component
//              name: "Guest"

import PropTypes from 'prop-types'

// In order for this component to accepts props (properties) this function needs a props paramenter, where props is a js-object 
function Student(props){

  const name = props.name ?? "Guest"
  const age = props.age ?? 0
  const isStudent = props.isStudent ?? false


    return(

        //Set of curly spaces to inject some js
        //Booleans do not work for some reason so use a ternary operator
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age} years old.</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>



    )
}
// We do have to import proptypes module, find within the node modules folder.
// If it is not installed there, than please install it through npm.

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}


// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: true,
// } deprecated it seems.

export default Student