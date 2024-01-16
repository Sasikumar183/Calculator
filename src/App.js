import React from "react";
import './calc.css';
import { useState } from "react";

function App() {
    const [result, setResult] = useState('');

    const numclick = (event) => {
        setResult(result.concat(event.target.value));
    };
    const clear = () => {
        setResult('');
    };
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calc">
            <input type="text" id="result" placeholder="0" value={result} />
            <input type="button" value="1" id="num" onClick={numclick} />
            <input type="button" value="2" id="num" onClick={numclick} />
            <input type="button" value="3" id="num" onClick={numclick} />
            <input type="button" value="4" id="num" onClick={numclick} />
            <input type="button" value="5" id="num" onClick={numclick} />
            <input type="button" value="6" id="num" onClick={numclick} />
            <input type="button" value="7" id="num" onClick={numclick} />
            <input type="button" value="8" id="num" onClick={numclick} />
            <input type="button" value="9" id="num" onClick={numclick} />
            <input type="button" value="0" id="num" onClick={numclick} />
            <input type="button" value="+" id="num" onClick={numclick} />
            <input type="button" value="-" id="num" onClick={numclick} />
            <input type="button" value="*" id="num" onClick={numclick} />
            <input type="button" value="/" id="num" onClick={numclick} />
            <input type="button" value="." id="num" onClick={numclick} />
            <input type="button" value="=" id="ans" onClick={calculate} />
            <input type="button" value="AC" id="clear" onClick={clear} />

        </div>
    );
}
export default App;