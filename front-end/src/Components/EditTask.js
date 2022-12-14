import React from "react";
import axios from "axios";
import withRouter from "./withRouter";
import { NavLink } from "react-router-dom";

function Navlink (){
   const handleBack= <NavLink to='/'><input type="button" name="return" style={{marginTop:'20px',marginBottom:'20px'}} value='Return' className="btn btn-secondary"  ></input></NavLink>
 
return handleBack
}

 class EditTask extends React.Component{
     state ={
     id: '',
     Task : '',
     Description: '',
     
      
    };

    //input change 
    changeHandler=(e) => {
      
            this.setState({ [e.target.id]: e.target.value})
     
        // console.log(this.state)
    }   

    //get Api
    async componentDidMount()  {
        let id =this.props.params.id
      
      
       await axios.get('http://127.0.0.1:8000/api/data/'+id)
  
       .then((res)=> {
        
           this.setState({
               
                Description: res.data[0].Description,
                Task: res.data[0].Task,
              
            })
            console.log(this.state)       
          })
        }
        
        //update btn  
    handleUpdate =async () => {
       
        let id = this.props.params.id
        const { Task,Description } = this.state;
      await  axios.put('http://127.0.0.1:8000/api/update/'+id ,{
            Task:Task,
            Description:Description
        
        })  
          
        window.location('/')
    
    }

   
  
render() {
      
    const { Task,Description} = this.state;
   
    return(
     <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Edit Task </h1>
                    <form  >
                        <div className="form-group">
                            <label htmlFor="Task">Task</label>
                            <input type="numbre" className="form-control"defaultValue={Task} id="Task" placeholder="Enter Number" onChange={this.changeHandler}></input>
                        </div>
                        <div className="form-group" onSubmit={()=>this.submitHandler}>
                            <label htmlFor="des">Description</label>
                            <input type="text" className="form-control" defaultValue={Description} id="Description" placeholder="Enter Name" onChange={this.changeHandler}></input>
                        </div>
                        <div className="d-flex justify-content-between">
                        <input type="button" name="update" style={{marginTop:'20px',marginBottom:'20px'}} value='Update' className="btn btn-primary"   onClick={this.handleUpdate}></input>
                        {<Navlink/>}
                        </div>
                    </form>
                        
                </div>
            </div>
        </div>
    )
}
}
export default withRouter(EditTask);