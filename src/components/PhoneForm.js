import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: "",
        phoneNumber: "",
    }
    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        })
    }
    render() {
        return (
            <div>
                <h2>Input상태 관리하기</h2>
                <p>이름입력 : <input
                    name="name"
                    type="text"
                    onChange={this.handleChange.bind(this)}
                /></p>
                <p>번호입력 : <input
                    name="phone"
                    type="text"
                    onChange={this.handleChange.bind(this)}
                /></p>

                <p>이름로그 : {this.state.name}</p>
                <p>폰번호로그 : {this.state.phone}</p>

            </div>
        );
    }
}

export default PhoneForm;