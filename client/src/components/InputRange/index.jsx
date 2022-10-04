import {
    Input,
} from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const InputRange = ({
    minPlaceholder,
    minPlaceholderWidth,
    maxPlaceholder,
    maxPlaceholderWidth,
    onChangeRange,
}) => {
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    useEffect(() => {
        onChangeRange([min, max]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [min, max]);

    return (
        <Input.Group compact>
            <Input
            className="site-input-between"
            style={{
                width: 80,
                borderRight: 0,
                pointerEvents: 'none',
            }}
            placeholder="Between"
            disabled
            />
            <Input 
            style={{ width: minPlaceholderWidth, textAlign: 'center' }} 
            placeholder={`Minimum ${minPlaceholder}`}
            value={min} 
            onChange={(e) => setMin(e.target.value)} />
            <Input
            className="site-input-split"
            style={{
                width: 30,
                borderLeft: 0,
                borderRight: 0,
                pointerEvents: 'none',
            }}
            placeholder="~"
            disabled
            />
            <Input
            className="site-input-right"
            style={{
                width: maxPlaceholderWidth,
                borderLeft: 0,
                textAlign: 'center',
            }}
            placeholder={`Maximum ${maxPlaceholder}`}
            value={max} 
            onChange={(e) => setMax(e.target.value)}
            />
        </Input.Group>
    )
};

export default InputRange;