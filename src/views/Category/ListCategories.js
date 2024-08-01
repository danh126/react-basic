import React from "react";
import AddCategory from "./AddCategory";
import './ListCategories.scss';
import { toast } from "react-toastify";

class ListCategories extends React.Component {
    state = {
        listCategories: [
            { id: 1, categoryName: 'Laptop' },
            { id: 2, categoryName: 'Mouse' },
            { id: 3, categoryName: 'Keyboard' },
            { id: 4, categoryName: 'Screen' },
        ],
        editCategory: {}
    }

    addCategory = (cat) => {
        this.setState({
            listCategories: [...this.state.listCategories, cat]
        })
    }

    handleDeleteCategory = (cat) => {
        console.log('>>> check cat delete: ', cat)

        let currentCat = this.state.listCategories;
        currentCat = currentCat.filter(item => item.id !== cat.id);

        this.setState({
            listCategories: currentCat
        })
        toast.warning("Delete Category Success!");
    }

    handleEditCategory = (cat) => {
        let { listCategories, editCategory } = this.state;
        let isEmptyObj = Object.keys(editCategory).length === 0;

        //Save
        if (isEmptyObj === false && editCategory.id === cat.id) {
            let listCategoriesCopy = [...listCategories];

            let objectIndex = listCategoriesCopy.findIndex(item => item.id === cat.id);
            listCategoriesCopy[objectIndex].categoryName = editCategory.categoryName;

            this.setState({
                listCategories: listCategoriesCopy,
                editCategory: {}
            })
            toast.info("Edit Category Success!");
            return;
        }

        //Click Edit
        this.setState({
            editCategory: cat
        })
    }

    handleOnChangeEditCat = (event) => {
        let editCategoryCopy = { ...this.state.editCategory };
        editCategoryCopy.categoryName = event.target.value;

        this.setState({
            editCategory: editCategoryCopy
        })
    }

    render() {
        let { listCategories, editCategory } = this.state;
        let isEmptyObj = Object.keys(editCategory).length === 0;

        return (
            <>
                <div className="list-category-container">
                    <AddCategory
                        addCategory={this.addCategory}
                    />
                    <div className="list-category-title">
                        List Categories
                    </div>
                    <div className="list-category-content">
                        {listCategories && listCategories.length > 0 &&
                            listCategories.map((item, index) => {
                                return (
                                    <div className="child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.categoryName}</span>
                                            :
                                            <>
                                                {editCategory.id === item.id ?
                                                    <span>{index + 1} -
                                                        <input type="text"
                                                            value={editCategory.categoryName}
                                                            onChange={(event) => this.handleOnChangeEditCat(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.categoryName}</span>
                                                }
                                            </>
                                        }
                                        <button onClick={() => this.handleEditCategory(item)}>
                                            {isEmptyObj === false && editCategory.id === item.id ? 'Save' : 'Edit'}
                                        </button>
                                        <button onClick={() => this.handleDeleteCategory(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default ListCategories;