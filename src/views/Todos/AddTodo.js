import React from "react";

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        if (!this.state.title) {
            alert('Missing Title');
            return;
        }

        let Todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addTodo(Todo);

        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text"
                    value={title}
                    onChange={(event) => this.handleChangeTitle(event)}
                />
                <button type="button" onClick={(event) => this.handleAddTodo(event)}>Add</button>
            </div>
        )
    }
}
export default AddTodo;