import React from "react";
import AddTodo from "./AddTodo";

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'Doing Homeword' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
        ]
    }

    addTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
    }

    render() {
        let { listTodo } = this.state;

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
                                    <span>{index + 1} - {item.title}</span>
                                    <button>Edit</button>
                                    <button>Delete</button>
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