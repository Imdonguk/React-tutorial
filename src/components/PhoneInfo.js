import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phoneNumber: ''
    }

    handleRemove = () => {
        const { onRemove, info } = this.props
        onRemove(info.id)
    }

    handleUpdate = () => {

    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    handleToggle = () => {
        const { onUpdate, info } = this.props;
        const { editing } = this.state;

        if (editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phoneNumber: this.state.phoneNumber
            });
        } else {
            this.setState({
                name: info.name,
                phoneNumber: info.phoneNumber
            })
        }
        this.setState({
            editing: !editing
        })
    }

    render() {
        const { name, phoneNumber } = this.props.info;
        const style = {
            border: '2px solid',
            fontSize: '20px',
            padding: '10px',
            margin: '10px'
        }
        const { editing } = this.state;
        return (
            <div style={style}>
                {
                    editing ?
                        (
                            <Fragment>
                                <div> 변경할 이름 :
                                    <input
                                        name="name"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={this.state.name}
                                    /></div>
                                <div> 변경할 번호 :
                                    <input
                                        name="phoneNumber"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={this.state.phoneNumber}
                                    /></div>
                            </Fragment>
                        ) :
                        (
                            <Fragment>
                                <div>{name}</div>
                                <div>{phoneNumber}</div>
                            </Fragment>
                        )
                }
                <button onClick={this.handleRemove}>제거!!</button>
                <button onClick={this.handleToggle}>
                    {
                        editing ? '적용!!' : '수정!!'
                    }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;