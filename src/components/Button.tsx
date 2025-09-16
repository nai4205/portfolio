import React from 'react'

interface ButtonProps {
  className?: string;
  id?: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ className, id, text }) => {
  return (
    <a 
    onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById('counter');
        if (target && id) {
            const yOffset = window.innerHeight * 0.15;
            const top = target.getBoundingClientRect().top + window.scrollY - yOffset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }}
    className={`${className ?? ''} cta-wrapper`}>
        <div className="cta-button group">
            <div className="bg-circle"/>
            <p className="text">{text}</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow" className="arrow"/>
            </div>
        </div>
    </a>
  )
}

export default Button