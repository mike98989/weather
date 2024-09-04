import react, { useState, useEffect } from "react";

const InputField = ({ placeHolder }: { placeHolder: string }) => {
  return (
    <>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="input_field"
        data-testid="input_field"
        type="text"
        placeholder={`${placeHolder}`}
      />
    </>
  );
};
export default InputField;
