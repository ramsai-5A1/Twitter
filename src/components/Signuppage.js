import { LOGO } from "../Helper/Constants"

const Signuppage = () => {
    return (
        <div className="flex justify-between">
            <div className="align-middle w-6/12 py-28">
                <img className="w-[650px] h-[550px]" alt="logo" src={LOGO}/>
            </div>

            <div className="p-2 m-2 w-6/12 py-28">
                <div className="flex flex-col space-y-10">
                    <span className="font-bold text-6xl m-2">Happening now</span>
                    <span className="font-bold text-2xl m-2 py-4">Join today.</span>
                </div>
                
                <Bar text={"Sign up with Google"}/>
                <Bar text={"Sign up with Apple"}/>
                <Divider/>
                <ColourBar text={"Create account"}/>
                <div className="w-80">
                    <p className="text-sm">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                </div>

                <div className="py-12 space-y-4">
                    <span className="font-bold text-lg m-2">Already have an account?</span>
                    <SignInButton/>
                </div>
                
            </div>
        </div>
    )
}

const Divider = () => {
    return (
        <div className="flex w-80 p-1 items-center">
            <div className="border-t w-72 border-gray-500"></div>
            <div className="mx-4">or</div>
            <div className="border-t w-72 border-gray-500"></div>
        </div>
    )
}

const Bar = ({ text }) => {
    return (
        <div className="w-80 h-10 rounded-3xl p-2 m-2 text-center bg-white text-black hover:cursor-pointer hover:bg-gray-200">
            <h1 className="font-bold">{text}</h1>
        </div>
    )
}

const ColourBar = ({ text }) => {
    return (
        <div className="w-80 h-10 rounded-3xl p-2 m-2 text-center bg-blue-400 text-white hover:cursor-pointer hover:bg-blue-500">
            <h1 className="font-bold">{text}</h1>
        </div>
    )
}

const SignInButton = () => {
    return (
        <div className="w-80 h-10 rounded-3xl p-2 m-2 text-center bg-black border hover:cursor-pointer hover:bg-gray-600">
            <h1 className="font-bold text-blue-500">{"Sign in"}</h1>
        </div>
    )
}

export default Signuppage;