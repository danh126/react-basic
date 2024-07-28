import React from "react";

//arrow Function with ReactJs
const FunctionCompnent = (props) => {
    let arrJobs = props.arrJobs;
    console.log('>>> check child arrow function:', props);

    return (
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
    )
}

export default FunctionCompnent;
