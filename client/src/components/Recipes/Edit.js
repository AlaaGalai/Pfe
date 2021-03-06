import React, {Component} from "react";
import axios from "axios";
import to from "await-to-js"
import BaseLayout from "../BaseLayout";



export default class Edit extends Component {
    state = {
        recipe: {
            title: "",
            author: "",
            prep_time: "",
            ingredients: "",
            steps: ""
        }
    }
    componentDidMount = async () => {
        const {id} = this.props.match.params
        console.log(id)
        let [error, result] = await to(axios.get(`/recipes/${id}`))
        let recipe = result.data
        if (error) {
            console.log(error)
        }
        return this.setState({recipe})
    }

    onTitleChange =(event)=> {this.setState({recipe:{...this.state.recipe,"title":event.target.value}})}
    onIngredientsChange =(event)=> {this.setState({recipe:{...this.state.recipe,"ingredients":event.target.value}})}
    onPrepChange =(event)=> {this.setState({recipe:{...this.state.recipe,"prep_time":event.target.value}})}
    onStepsChange =(event)=> {this.setState({recipe:{...this.state.recipe,"steps":event.target.value}})}




    onSubmit = async(event)=>{
        event.preventDefault()
        const {title, prep_time,ingredients,steps} = this.state.recipe
        const updateParameters ={
            title,
            prep_time,
            ingredients,
            steps
        }
        const {id} = this.props.match.params
        let [ error, result ] = await to(axios.put(`/recipes/${id}`, updateParameters))
        console.log(result)

        if(error){
            console.log("edit has an error:", error)
        }
        return  this.setState({ title,prep_time, ingredients,steps})
    }

    changePage =(event)=>{
        event.preventDefault()
        const {id} = this.props.match.params
        this.props.history.push(`/recipes/${id}`)
    }


    render(){
        let { title, author, prep_time,ingredients,steps } = this.state.recipe
        return(
            <div className='App'>
                <div className = "container">
                    <BaseLayout />
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title heading">
                                EDIT RECIPE
                            </h3>
                        </div>

                        <form >
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="text" className="form-control" name="title" value={title} onChange={this.onTitleChange}
                                       placeholder="Title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="prep_time">Time:</label>
                                <input type="url" className="form-control" name="prep_time" value={prep_time} onChange={this.onPrepChange}
                                       placeholder="Time"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ingredients">Type:</label>
                                <textarea className="form-control" name="ingredients" value={ingredients} onChange={this.onIngredientsChange}
                                          placeholder="Type" cols="80" rows="3"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="steps">Description:</label>
                                <input type="url" className="form-control" name="steps" value={steps} onChange={this.onStepsChange}
                                       placeholder="Description"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Organizer:{author}</label>
                            </div>

                            <button type="submit" className="btn btn-dark" onClick={this.onSubmit}>Save Change</button>
                            <button type="submit" className="btn btn-info" onClick={this.changePage}>Back to Post</button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }

}
