import axios from "axios";



import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

import Temp from "./components/temp";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//axios ddefault setttings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;





/*
function Name1(){
  return(
    <h1>
      NAME1
    </h1>
  )
}



function Name2(){
  return(
    <h1>
      NAME2
    </h1>
  )
}
/*
<Route path="/" exact component= {Name1} />
    <Route path="/movie" exact component= {Name2} /> 


    
<DefaultHOC path="/" exact  element={<Temp/>}/>
 */

function App() {
  return (
    <>

<DefaultHOC path="/" exact  component={HomePage}/>
<MovieHOC path="/movie/:id" exact component={Movie}/>{/**go to site rootroute/movie/123 */}
<DefaultHOC path="/plays" exact component={Plays}/>
</>
    
  );
}

export default App;
