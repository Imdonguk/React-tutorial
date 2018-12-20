import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: "",
        phoneNumber: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phoneNumber: ''
        })
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Input상태 관리하기</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>이름입력 : <input
                        name="name"
                        type="text"
                        onChange={this.handleChange}
                    /></p>
                    <p>번호입력 : <input
                        name="phoneNumber"
                        type="text"
                        onChange={this.handleChange}
                    /></p>
                    <button type="submit">등록</button>
                </form>
            </div>
        );
    }
}

export default PhoneForm;