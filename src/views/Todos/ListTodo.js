import React from "react";
import AddTodo from "./AddTodo";

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'Doing Homeword' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {}
    }

    addTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodo;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);

        this.setState({
            listTodo: currentTodos
        })
    }

    handleEditTodo = (todo) => {

        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0

        //Save 
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo];

            let objIndex = listTodoCopy.findIndex(item => item.id === todo.id);

            listTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            return;
        }

        //Edit
        this.setState({
            editTodo: todo
        })
    }

    //Edit on change
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;

        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <div className="list-todo-container">
                <AddTodo
                    addTodo={this.addTodo}
                />
                <div className="list-todo-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                        </>
                                    }
                                    <button onClick={() => this.handleEditTodo(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ListTodo;