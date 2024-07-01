import { HiMiniPresentationChartBar } from "react-icons/hi2";
export default function Navbar() {
    return(
        <nav className="bg-gray-200 flex justify-between p-3">
            <HiMiniPresentationChartBar className="text-4xl text-blue-500"/>
            <button className="text-xl bg-orange-500 p-1 px-3 text-white rounded-xl cursor-pointer">Login</button>
        </nav>
    );
}