import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJobs: '',
        salary: '',
    }

    handleTitleJobs = (event) => {
        this.setState({
            titleJobs: event.target.value
        })
    }

    handleSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() //ngăn sự kiện load lại trang khi submit
        console.log('>>> check data input:', this.state)
    }

    render() {
        return (
            <form>
                <label>Job's Name</label><br />
                <input type="text" onChange={(event) => this.handleTitleJobs(event)} value={this.state.titleJobs} /><br />
                <label>Salary</label><br />
                <input type="text" onChange={(event) => this.handleSalary(event)} value={this.state.salary} /><br /><br />
                <input type="submit" onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}

export default AddComponent;