import { useParams } from "react-router-dom";
const Display = (props) => {
    const {word} = useParams();
    const {color} = useParams();
    const {bgcolor } = useParams();
 
    return (
      <div>
          {
            !isNaN(word) ? <h1 >The number is {word} </h1> 
            :
            <h1 style={{color : `${color}`, backgroundColor: `${bgcolor}`}}>The word is: {word} </h1> 
          }
          
      </div>
    );
  }

  export default Display;

