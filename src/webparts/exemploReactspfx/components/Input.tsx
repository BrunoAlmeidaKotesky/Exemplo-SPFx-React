import * as React from 'react';
import * as styles from './ExemploReactspfx.module.scss';

interface IStyledInputProps {
    customStyle?: React.CSSProperties;
    onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    value: string;
}
const StyledInput = ({ customStyle, onChange, label, value }: IStyledInputProps) => {
    return (<div style={{margin: 4}}>
            <label style={{fontWeight: 600}}>{label}</label>
            <input
                value={value} 
                onChange={onChange}
                style={customStyle ??
                {
                    border: '1px solid #ccc',
                    boxShadow: 'inset 0 1px 3px #ddd',
                    borderRadius: 4,
                    boxSizing: 'border-box',
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 12,
                    paddingBottom: 12,
                    width: '100%'
                }} 
                type="text" />
                </div>);
};

export default React.memo(StyledInput);