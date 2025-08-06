import React from 'react'
import './ModuleButton.css'

type ModuleButtonProps = {
    title: string;
    description: string;
    source: string;
}

const ModuleButton = ({ title, description, source }: ModuleButtonProps) => {
    return (
        <div className="card">
            <img src={source} className='img' alt={title} />
            <div className="textBox">
                <p className="text head">{title}</p>
                <span>{description}</span>
            </div>
            <h3 className="title">{title}</h3>
        </div>
    )
}

export default ModuleButton