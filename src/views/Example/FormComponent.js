import React from "react";

import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class FormComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'job1', title: 'Developers', salary: '500' },
            { id: 'job2', title: 'Testers', salary: '400' },
            { id: 'job3', title: 'Project Managers', salary: '1500' }
        ]
    }

    // arrow function nhận dữ liệu từ lớp con truyền vào
    addNewJobs = (job) => {
        console.log('>>> check data job child: ', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    // arrow function delete job
    deleteJobs = (job) => {
        let currenJob = this.state.arrJobs;
        currenJob = currenJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJob
        })
    }

    //Hàm này là nơi thích hợp dùng để gọi api
    componentDidMount() {
        console.log('>>> component did mount');
    }

    //Hàm được dùng khi thao tác giữa con và cha (dùng để cập nhật dữ liệu)
    componentDidUpdate(prevProps, prvevState) {
        console.log('>>> rung didUpdate ', 'prev status: ', prvevState, 'current state: ', this.state);
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJobs={this.addNewJobs}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJobs={this.deleteJobs}
                />
            </>
        )
    }
}

export default FormComponent;