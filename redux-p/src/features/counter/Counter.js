import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncremnetAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncremnetAmount(0);
        dispatch(reset());
    };

    return (
        <section>
            <p>{count}</p>
            <div>
                <button
                    className="addBtn"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <button
                    className="removeBtn"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncremnetAmount(e.target.value)}
            />
            <div>
                <button
                    className="addAmountBtn"
                    onClick={() => dispatch(incrementByAmount(addValue))}
                >
                    Add Amount
                </button>
                <button className="resetBtn" onClick={resetAll}>
                    Reset
                </button>
            </div>
        </section>
    );
};

export default Counter;
