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
        return (
            <>
                <div>Child Component: {this.props.name}</div>
            </>
        )
    }
}

export default ChildComponent;