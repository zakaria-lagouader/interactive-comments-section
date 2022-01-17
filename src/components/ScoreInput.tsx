import React, { useState } from 'react'
import { MinusIcon, PlusIcon } from './icons'

interface ScoreInputProps {
    value?: number
}

function ScoreInput({ value } : ScoreInputProps) {
    const [score, setScore] = useState(value ?? 0);

    const increment = () => {
        setScore(s => s + 1);
    }
    const decrement = () => {
        setScore(s => s - 1);
    }

    return (
        <div className="flex flex-col h-fit bg-very-light-gray rounded-md w-10 overflow-hidden">
            <button className="w-10 h-10 grid place-items-center hover:bg-light-gray focus:outline-none" onClick={increment}>
                <PlusIcon />
            </button>
            <p className="font-medium text-moderate-blue text-center">{score}</p>
            <button className="w-10 h-10 grid place-items-center hover:bg-light-gray focus:outline-none" onClick={decrement}>
                <MinusIcon />
            </button>
        </div>
    )
}

export default ScoreInput;