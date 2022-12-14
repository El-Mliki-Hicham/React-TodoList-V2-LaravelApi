import './Components/style/css.css'
import React from 'react';
import ListTask from './Components/Table';
import AddTask from './Components/AddTask';
import EditTask from './Components/EditTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,  Routes,BrowserRouter} from 'react-router-dom';

class App extends React.Component{
render(){
  return(
   
      
    
    <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
                <div className="card px-3">
                    <div className="card-body">
                        <h4 className="card-title">Todo list</h4>
                    <BrowserRouter>   
                        <Routes>
                              <Route  path="/edit/:id" element={<EditTask />}> </Route>
                              <Route path="/" element={ < AddTask />}/>
                        </Routes>
                    </BrowserRouter>
              
                  <ListTask />
            </div>
      </div>
    </div>
  </div>
  </div>
  </div>

  )
}

}

export default App;
