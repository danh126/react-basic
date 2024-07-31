import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo'); //thay đổi lịch sử chuyển đến trang /todo
        }, 3000);
    }

    render() {
        console.log('>>> check props: ', this.props);
        return (
            <div>Hello World With Reactjs (NTD)</div>
        )
    }
}
export default withRouter(Home);