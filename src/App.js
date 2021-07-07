import ItemDetailContainer from "./container/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./componentes/navbar/NavBar";
import ItemListContainer from "./container/ItemListContainer";
import ItemsCheckoutContainer from "./container/ItemsCheckoutContainer"


function App() {
  return (
    <div className="App">

    
     
     <BrowserRouter>
      <NavBar /*categories ={categories}*//>
      <Switch>
        <Route exact path="/"> <ItemListContainer/> </Route>
        <Route path="/category/:id"> <ItemListContainer/> </Route>
        <Route path="/item/:id"> <ItemDetailContainer/> </Route> 
        <Route path="/checkout"> <ItemsCheckoutContainer/> </Route>
        <Route exact path="*"> <ItemListContainer/> 404 página no encontrada </Route>


      </Switch>


     </BrowserRouter> 

    
     
     
    </div>
  );
}

export default App;