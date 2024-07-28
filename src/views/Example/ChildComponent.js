import React from "react";

class ChildComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }

    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() //ngăn sự kiện load lại trang khi submit
        console.log('>>> check data input:', this.state)
    }

    render() {
        console.log('>>> check props:', this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age } = this.props; // lưu ý tên biến phải trùng với key trong object
        return (
            <>
                <div>Child Component: {name} - {age}</div>
            </>
        )
    }
}

export default ChildComponent;