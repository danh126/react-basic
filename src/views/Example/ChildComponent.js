import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('>>> handleOnClickDelete:', job);
        this.props.deleteJobs(job);
    }

    render() {
        let { arrJobs } = this.props; // lưu ý tên biến phải trùng với key trong object
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs: true' : 'showJobs: false';
        console.log('>>> check status showJobs:', check);

        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>

                    :

                    <>
                        <div className="job-list">
                            {
                                //Dùng map để lập các phần tử ở dạng mãng
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}  <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;