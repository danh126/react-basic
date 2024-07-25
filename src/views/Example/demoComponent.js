import React from "react";

/*
Tạo class Component

JSX => return về 1 khối lớp ngoài cùng

Fragment để bao 1 khối (<> </>)

className => đặt class cho thẻ html trong ReactJs
*/

class DemoComponent extends React.Component {

    //state là 1 object
    state = {
        name: 'DANH NGUYEN',
        home: 'Can Giuoc'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        // let name = 'DANH NGUYEN';
        return (
            <>
                <div className="myname">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My Name is {this.state.name}
                </div>
                <div className="test"> Live in {this.state['home']}</div >
            </>
        )
    }
}

export default DemoComponent; // để sử dụng component