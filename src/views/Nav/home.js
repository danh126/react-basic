import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/imgs/NTD.jpg';

import { connect } from "react-redux";

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo'); //thay đổi lịch sử chuyển đến trang /todo
    //     }, 3000);
    // }

    render() {
        console.log('>>> check props dataRedux: ', this.props.dataRedux);

        return (
            <>
                <div>Hello World With Reactjs (NTD)</div>
                <img src={logo} style={{ width: '150px', marginTop: '15px' }} />
            </>
        )
    }
}

const mapState = (state) => {
    return {
        dataRedux: state.users
    }
}

export default connect(mapState)(withRouter(Home));
// export default Color(Home);