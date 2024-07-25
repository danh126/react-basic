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
        name: '',
        home: 'Can Giuoc'
    }

    handleOnChangeName = (event) => {
        /*Hàm setState dùng để set lại giá trị cần set 
        (còn những giá trị khác trong state sẽ tự động merga)
        */
        this.setState({
            name: event.target.value
        })
    }

    handleOnClick = () => {
        alert('click me');
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
                <div className="click">
                    <button onClick={() => this.handleOnClick()}>Click me</button>
                </div>
            </>
        )
    }
}

export default DemoComponent; // để sử dụng component