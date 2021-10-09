import LightCard from "../components/LightCard";
import Section from "../components/Section";

export default function ServicesSection(props) {
    return (
    <Section
        id="services"
        title="SERVICES" 
        heading="My Fullstack Services" 
        description="i develop both native, hybrid and web apps for all platforms">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">
            <LightCard className='p-5 flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <p className="text-xl font-bold mt-4">Web App Development</p>
                <p className="mt-3">I develop both backend and frontends for full enterprice systems</p>
            </LightCard>
            <LightCard className='p-5 flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p className="text-xl font-bold mt-4">Mobile App Development</p>
                <p className="mt-3">I develop both hybrid and native mobile applications for android and ios.</p>
            </LightCard>
            <LightCard className='p-5 flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-xl font-bold mt-4">Web App Development</p>
                <p className="mt-3"> develop desktop applications for windows in C# or hybrid in electron.js</p>
            </LightCard>
        </div>
    </Section>
    )
}