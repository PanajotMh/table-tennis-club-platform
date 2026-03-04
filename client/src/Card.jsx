import profilePic from './assets/Small.jpg'

function Card(){
    //cards typically have a image,title and descriptiom
    // class is a reserved keyword in React
    return(
        <div className="card">  
            <img className="card-image"src={profilePic} alt="Panajot" />
            <h2 className="card-title"> Panajot </h2>
            <p className="card-text"> I am a student of Computer Science and watch Youtube</p>
        </div>
    );

}
export default Card
// exporting so we can use it elsewhere