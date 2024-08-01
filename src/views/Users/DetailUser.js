import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";


class DetailUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        let res = await axios.get(`https://reqres.in/api/users/${id}`);

        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {}
        })

        console.log('>>> user detail: ', this.state.user)
    }

    handleBackListUsers() {
        this.props.history.push('/users');
    }

    render() {
        console.log('>>> check props: ', this.props)
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0

        return (
            <>
                <div>Hello World From Detail User Id: {this.props.match.params.id}</div><br />
                {isEmptyObj === false &&
                    <>
                        <div>FullName: {user.first_name} {user.last_name}</div>
                        <div>Email: {user.email}</div><br />
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackListUsers()}>Back List Users</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);