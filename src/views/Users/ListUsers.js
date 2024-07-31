import React from "react";
import axios from "axios";
import './ListUsers.scss';


class ListUsers extends React.Component {

    // //Cách 1 để gọi api trong reactjs (thường theo chuẩn thư viện)
    // componentDidMount() {
    //     axios.get('https://reqres.in/api/users?page=1').then(
    //         res => {
    //             console.log('>>> check data users call api page 1: ', res.data.data)
    //         })
    // }

    state = {
        listUsers: {}
    }

    //Cách 2 => async & await để ngăn tình trạng bất đồng bộ trong Js
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : {}
        })
        console.log('>>> check data users call api page 2: ', res.data.data)
    }

    render() {
        let { listUsers } = this.state;

        return (
            <div className="list-user-container">
                <div className="list-user-title">
                    Fetch List Users Call Api
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ListUsers;