export default function Header() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* left column */}
                <div className="flex flex-col">
                    <div><p className="inline rounded bg-green-400 text-black px-2 py-1 max-w-full">Fullstack Developer</p></div>
                    <p className="text-4xl font-bold mt-5">I am Joshua Opata</p>
                    <p className="mt-4">I am  passionate fullstack developer with 5+ years of experience</p>
                    <div className="mt-9">
                        <button className="border-2 border-green-400 hover:bg-green-400 hover:text-gray-800 px-6 py-2 rounded-3xl text-sm mr-3 font-bold">My Portfolio</button>
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
        </div>
    )
}