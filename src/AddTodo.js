import React, { Component } from 'react'

class AddTodo extends Component {
    state={
         content: ''
    }
    handleChange=(e)=>{
   this.setState({
       content: e.target.value
   })
    }
    handleSubmit=(e)=>{
     e.preventDefault();
     this.props.addTodo(this.state);
     this.setState({
         content: ''
     })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="red-text"><h3>Add new Todos:</h3></label>
                    
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                    <h4>->Click on todo to delete it</h4>
                </form>
            </div>
        )
    }
}

export default AddTodo
