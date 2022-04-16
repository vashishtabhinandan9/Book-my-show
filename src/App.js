


import DefaultHOC from "./HOC/Default.HOC";

import Temp from "./components/temp";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import HomePage from "./pages/Home.page";

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
</>
    
  );
}

export default App;
