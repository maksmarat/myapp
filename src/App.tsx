import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import './App.css';
import huh from './img/huh.jpg'
import styled from "styled-components";

function RandomCounter() {
    console.log('Some calculations..')
    return Math.trunc(Math.random() * 20)
}

function App() {
    const [counter, setCounter] = useState(() => {
        return RandomCounter()
    })

    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now()
    })

    function updateTitle() {
        setState(prev => {
            return {
                ...prev,
                title: 'Прикол'
            }
        })
    }

    function increment() {
        //setCounter(counter + 1)
        //setCounter(prev => prev + 1)
        setCounter((prevCounter) => {
            return prevCounter + 1
        })
    }

    function decrement() {
        setCounter(counter - 1)
    }

    const [inputValue, setInputValue] = useState("");
    const [textinp, settextinp] = useState("")

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            //действия, при нажатии enter
            settextinp(inputValue);
            console.log("Введенный текст:", textinp);
        }
    };
    return (
        <div className="App">
            <div className="slide-out-text">
                <span>
                    <h5>rely only on yourself</h5>
                </span>
            </div>
            <div className="top-bar">
                <nav>
                    <ul>
                        <li><a href="#home">Главная</a></li>
                        <li><a href="#about">О нас</a></li>
                        <li><a href="#services">Услуги</a></li>
                    </ul>
                </nav>
            </div>

                <h1>Счетчик: {counter}</h1>
                <button onClick={increment} className="btn btn-success">Добавить </button>
                <button onClick={decrement} className="btn btn-danger">Убрать</button>
                <button onClick={updateTitle} className="btn btn-default">Изменить название</button>
                <pre>{JSON.stringify(state, null, 2)}</pre>
                <div className = "textinfo"> 
                    <input
                        type="text"
                        placeholder="..."
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <p>Введенный текст: {textinp}</p>
            </div>
        </div> 
    );
}

export default App;
