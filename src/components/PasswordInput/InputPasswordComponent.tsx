import react, { useState, useEffect } from "react";

const PasswordInput = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (value.length > 5) {
      const regex: RegExp = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]*$/;
      if (regex.test(value)) {
        setError("");
      } else {
        setError(
          "Input must contain at least one uppercase letter, some numbers, and only alphanumeric values."
        );
      }
      setValue(value);
    }
  }, [value]);
  return (
    <>
      {error && (
        <div
          id="toast-simple"
          className="flex items-center w-full p-4 mb-3 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
          role="alert"
        >
          <svg
            className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <div className="ps-4 text-xs font-normal" data-testid="error-message">
            {error}
          </div>
        </div>
      )}
      <input
        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password-input"
        type="password"
        value={value}
        data-testid="password-input"
        placeholder="******************"
        // onChange={(e) => handleOnChange(e)}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
export default PasswordInput;
