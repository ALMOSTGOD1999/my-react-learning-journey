import React from "react";

const inputBox = ({
  amount,
  label,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = "false",
  currencyDisabled = "false",
  className = "",
}) => {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label htmlFor="" className="text-black/40 mb-2 inline-block ">
          {label}
        </label>
        <input
          type="number"
          placeholder="amount"
          className="outline-none w-full py-1.5 bg-transparent"
          disabled={amountDisabled}
          value={amount}
          onChange={onAmountChange && onAmountChange(e.target.value)}
        />
      </div>
      <div>
        <p>Currency Type</p>
        <select
          className=""
          onChange={onCurrencyChange && onCurrencyChange(e.target.value)}
          value={selectedCurrency}
          name=""
          id=""
        ></select>
      </div>
    </div>
  );
};

export default inputBox;
