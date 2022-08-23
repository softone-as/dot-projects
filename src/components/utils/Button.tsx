import React from 'react';

interface ButtonProps
    extends React.DetailedHTMLProps<
            React.ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        React.AriaAttributes {
    variety: 'primary' | 'secondary';
    text: string;
}

const Button = (props: ButtonProps) => {
    const { text, variety, ...rest } = props;

    const baseClass =
        'flex items-center justify-center gap-2 rounded-full px-5 py-3 text-lg font-medium text-white';
    const buttonClass =
        variety === 'primary'
            ? `${baseClass} bg-violet-500`
            : `${baseClass} border border-white/50`;

    return (
        <button className={`${buttonClass}`} {...rest}>
            <span> {text}</span>
            <span>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                >
                    <path
                        d='M6.00156 13.4016L4.60156 12.0016L8.60156 8.00156L4.60156 4.00156L6.00156 2.60156L11.4016 8.00156L6.00156 13.4016Z'
                        fill='white'
                    />
                </svg>
            </span>
        </button>
    );
};

export default Button;
