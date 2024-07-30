import React from "react";

import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class FormComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'job1', title: 'Developers', salary: '500 $' },
            { id: 'job2', title: 'Testers', salary: '400 $' },
            { id: 'job3', title: 'Project Managers', salary: '1500 $' }
        ]
    }

    render() {
        return (
            <>
                <AddComponent />

                <ChildComponent
                    name={this.state.firstName}
                    age={20}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default FormComponent;