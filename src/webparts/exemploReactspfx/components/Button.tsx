import * as React from 'react';

interface IButtonProps {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button = ({ onClick, text }: IButtonProps) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: 8
        }}>
            <button
                onClick={onClick}
                style={{
                    height: "40px",
                    width: "80%",
                    background: "#0075c7",
                    cursor: "pointer",
                    fontSize: "18px",
                    color: "white",
                    fontWeight: 600,
                    borderRadius: "8px",
                    border: "unset",
                    boxShadow: "8px 5px 15px -6px #00000"
                }}>
                {text}
            </button>
        </div>);
};

export default React.memo(Button);