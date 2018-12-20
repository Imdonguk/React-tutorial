import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneList extends Component {

    render() {
        const { info, onRemove, onUpdate } = this.props;
        return (
            <div>
                {info.map(v => <PhoneInfo
                    info={v}
                    key={v.id}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />)}
            </div>
        );
    }
}

export default PhoneList;