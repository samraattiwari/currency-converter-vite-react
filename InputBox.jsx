import React from "react";

function InputBox({ label, amount, currencyOptions, onCurrencyChange, selectCurrency, onAmountChange, amountDisable }) {
    return (
        <div className="flex flex-col">
            <label className="mb-1 text-gray-700">{label}</label>
            <input
                type="number"
                value={amount}
                disabled={amountDisable}
                onChange={(e) => onAmountChange(Number(e.target.value))}
                className="border rounded p-2 mb-2"
            />
            <select
                value={selectCurrency}
                onChange={(e) => onCurrencyChange(e.target.value)}
                className="border rounded p-2"
            >
                {currencyOptions && currencyOptions.length > 0 ? (
                    currencyOptions.map((option) => (
                        <option key={option} value={option}>
                            {option.toUpperCase()}
                        </option>
                    ))
                ) : (
                    <option>Loading...</option>
                )}
            </select>
        </div>
    );
}

export default InputBox;
