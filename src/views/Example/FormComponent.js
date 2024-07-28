import React from "react";

import ChildComponent from "./ChildComponent";

class FormComponent extends React.Component {
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
                <form>
                    <label>First Name</label><br />
                    <input type="text" onChange={(event) => this.handleFirstName(event)} value={this.state.firstName} /><br />
                    <label>Last Name</label><br />
                    <input type="text" onChange={(event) => this.handleLastName(event)} value={this.state.lastName} /><br />
                    <input type="submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
                <ChildComponent name={'child one'} age={20} />
            </>
        )
    }
}

export default FormComponent;