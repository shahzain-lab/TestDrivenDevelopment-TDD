import React, { useState } from 'react';


const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(e.target.value));
    }

    const countAddHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCounter(counter + inputValue);
    }

    const countSubHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCounter(counter - inputValue);
    }

    return (
        <div>
            <h3 data-testid="counterHeader">My Counter</h3>
            <h1 data-testid="counter">{counter}</h1>

            <div>
                <button
                    data-testid="add-btn"
                    onClick={countAddHandler}
                >+</button>
                <input
                    style={{ textAlign: 'center' }}
                    type="text"
                    data-testid="input"
                    value={inputValue}
                    onChange={inputHandler}
                />
                <button
                    data-testid="sub-btn"
                    onClick={countSubHandler}
                >-</button>
            </div>
        </div>
    )
};

export default Counter;