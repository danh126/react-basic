import React from "react";
import { toast } from "react-toastify";

class AddCategory extends React.Component {

    state = {
        categoryName: ''
    }

    handleOnChangeAddCat = (event) => {
        this.setState({
            categoryName: event.target.value
        })
    }

    handleAddCategory = () => {
        if (!this.state.categoryName) {
            toast.error("Category Name Required!")
            return;
        }

        let cat = {
            id: Math.floor(Math.random() * 1000),
            categoryName: this.state.categoryName
        }

        this.props.addCategory(cat)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(event) => this.handleOnChangeAddCat(event)} />
                <button type="button" onClick={() => this.handleAddCategory()}>Add</button>
            </div>
        )
    }
}

export default AddCategory;