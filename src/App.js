


import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

import Temp from "./components/temp";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
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

</>
    
  );
}

export default App;
