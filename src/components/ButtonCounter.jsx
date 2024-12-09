import { useState } from 'react'

function ButtonCounter(props) {
    const [count, setCount] = useState(parseInt(props.initialState));

    function incCount() {
        setCount(count + 1);
    }

    return (
        <div className="card">
            <button onClick={incCount}>
                count is {count}
            </button>
        </div>
    );

}

export default ButtonCounter
