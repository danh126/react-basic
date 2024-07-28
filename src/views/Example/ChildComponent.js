import React from "react";

class ChildComponent extends React.Component {

    render() {
        console.log('>>> check props:', this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age, arrJobs } = this.props; // lưu ý tên biến phải trùng với key trong object
        return (
            <>
                <div className="job-list">
                    {
                        //Dùng map để lập các phần tử ở dạng mãng
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent;