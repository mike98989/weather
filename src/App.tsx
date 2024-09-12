import ButtonComponent from "./components/Button/ButtonComponent";
import PasswordInput from "./components/PasswordInput/InputPasswordComponent";
import InputField from "./components/PasswordInput/InputFieldComponent";
// import "./App.css";

function App() {
  return (
    <>
      <div className="w-2/5  mx-auto mt-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <div className="font-bold text-2xl mb-2">Weather App</div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <InputField placeHolder="Enter username" />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            {/* Password Input */}
            <PasswordInput />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <ButtonComponent
              buttonText="Sign In"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            />
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
