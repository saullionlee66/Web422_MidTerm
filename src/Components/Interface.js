import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function Interface({input,setInput,result,setResult,operator,setOperator}) {
    const clickHandler = (e) => {
        setInput(input = input + e.target.name);
        console.log(input);
    }
    
    const addFunction = () =>{
        if(operator === ""){
            setOperator("add");
            if(result === 0){
                setResult(result = result + parseInt(input));
            }
            setInput("");
        }else{
            equalFunction();
        }

    }

    const substractFunction = () =>{
        if(operator === ""){
            setOperator("substract");
            if(result === 0){
                setResult(result = result + parseInt(input));
            }
            setInput("");
        }else{
            equalFunction();
        }
    }

    const multiplyFunction = () =>{
        if(operator === ""){
            setOperator("multiply");
            if(result === 0){
                setResult(result = result + parseInt(input));
            }
            setInput("");
        }else{
            equalFunction();
        }
    }

    const divideFunction = () =>{
        if(operator === ""){
            setOperator("divide");
            if(result === 0){
                setResult(result = result + parseInt(input));
            }
            setInput("");
        }else{
            equalFunction();
        }
    }

    const equalFunction = () =>{
        if(operator ==="add"){
            setOperator("");
            setResult(result = result + parseInt(input));
            console.log(result);
        }
        if(operator ==="substract"){
            setOperator("");
            setResult(result = result - parseInt(input));
            console.log(result);
        }
        
        if(operator ==="multiply"){
            setOperator("");
            setResult(result = result * parseInt(input));
            console.log(result);
        }
        if(operator ==="divide"){
            setOperator("");
            setResult(result = result / parseInt(input));
            console.log(result);
        }
    }

    const clearFunction = () =>{
        setInput("");
        setResult(0);
        setOperator("");
    }

    const changeHandler = ()=>{
        //to prevent warning message
    }
    return (
        <div className="calculator-container">
            <div className="link">
                <Link to="/">Go to Public Page</Link>
            </div>
            <div className="display">
                <div>
                    <h3>Input</h3>
                    <input type="text" value={input} onChange={changeHandler} />
                </div>
                <div>
                    <h3>Operator</h3>
                    <input type="text" value={operator} onChange={changeHandler} />
                </div>
                <div>
                    <h3>Result</h3>
                    <input type="text" value={result}  onChange={changeHandler} />
                </div>
            </div>
            <div className="calculator-interface">
                <div >
                    <button className="button" name="7" onClick={clickHandler} >7</button>
                    <button className="button" name="8" onClick={clickHandler}>8</button>
                    <button className="button" name="9" onClick={clickHandler}>9</button>
                </div>
                <div>
                    <button className="button" name="4" onClick={clickHandler}>4</button>
                    <button className="button" name="5" onClick={clickHandler}>5</button>
                    <button className="button" name="6" onClick={clickHandler}>6</button>
                </div>
                <div>
                    <button className="button" name="1" onClick={clickHandler}>1</button>
                    <button className="button" name="2" onClick={clickHandler}>2</button>
                    <button className="button" name="3" onClick={clickHandler}>3</button>
                </div>
                <div>
                    <button className="button" name="0" onClick={clickHandler}>0</button>
                    <button className="button" onClick={addFunction} >+</button>
                    <button className="button" onClick={substractFunction} >-</button>
                </div>
                <div>
                    <button className="button" onClick={multiplyFunction}>*</button>
                    <button className="button" onClick={divideFunction}>/</button>
                    <button className="button" onClick={equalFunction} >=</button>

                    <button className="button" onClick={clearFunction} >C</button>
                </div>
            </div>
            

        </div>
    )
}

export default Interface

