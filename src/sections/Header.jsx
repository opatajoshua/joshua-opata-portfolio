import { FaMapMarkerAlt } from "react-icons/fa";
import Section from "../components/Section";

export default function Header() {
    return (
        <div className="home-bg">
            <Section className="home-bg">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    {/* left column */}
                    <div className="flex flex-col">
                        <div><p className="inline rounded bg-green-400 text-black px-2 py-1 max-w-full">Fullstack Developer</p></div>
                        <p className="text-4xl font-bold mt-5">I am Joshua Opata</p>
                        <p className="mt-4">I am a passionate fullstack developer with 5+ years of experience</p>
                        <span className="group">
                            <div className="flex items-center text-gray-400 mt-2">
                            <FaMapMarkerAlt className="mr-1"/> Accra - Ghana | Remote
                            </div>
            
                        </span>
                        <div className="mt-9">
                            <button className="border border-green-400 hover:bg-green-400 hover:text-gray-800 px-6 py-2 rounded-3xl text-sm mr-3 font-bold">My Portfolio</button>
                            <button className="bg-gray- bg-gray-500 hover:bg-gray-800 hover:text-green-400 px-6 py-2 rounded-3xl text-gray- text-gray-900 font-bold text-sm">Download CV</button>
                        </div>
                        <div className="flex flex-row items-center mt-8">
                            <p className="text-4xl mr-3">5+</p>
                            <div className="text-xs text-gray-400">
                                <p>YEARS</p>
                                <p>EXPERIENCE</p>
                            </div>
                        </div>
                    </div>
            
                </div>
            </Section>
        </div>
    )
}