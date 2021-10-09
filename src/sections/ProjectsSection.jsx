import { ExternalLinkIcon, ZoomInIcon } from "@heroicons/react/outline";
import LightCard from "../components/LightCard";
import Section from "../components/Section";
import projects from '../data/projects.json';

export default function ProjectsSection(props) {
    return (
    <Section
        id="projects"
        title="PORTFOLIO" 
        heading="My Latest Projects" 
        description="These are the some of my latest projects. some links are not included due to NDA but you can contact me for more.">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
            {projects.map((proj, i) => 
                <LightCard key={i} className="flex flex-col m-3 overflow-hidden rounded-2xl">
                    <div className="group relative h-40 overflow-hidden cursor-pointer">
                        <div className="transition duration-500 ease-in-out bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 absolute left-0 top-0 z-10 h-full w-full flex items-center justify-center">
                            <ZoomInIcon className="h-8 w-8 text-green-100"/>
                        </div>
                        <img className="w-full h-auto object-center absolute left-0 top-0 z-0" src={`img/projects/${proj.image}`} alt={proj.image}/>
                    </div>
                    <div className="px-5 pb-5">
                        <p className="text-lg font-bold">{proj.name}</p>
                        <p className="text-sm truncate cursor-pointer hover:text-green-400">{proj.description}</p>
                        <p className="flex flex-wrap items-center" style={{minHeight: '70px'}}>
                            {proj.skills.map((sk, j) => 
                                <span key={j} className="text-xs px-3 py-1 bg-gray-700 text-green-400 rounded-2xl mt-2 mr-1">{sk}</span>
                            )}
                        </p>
                        <div className="flex mt-4">
                            {proj.links.map((lnk, k) => 
                                <a href={lnk.link} key={k} disabled={lnk.disabled} className="flex-1 flex items-center justify-center text-center bg-green-600 hover:bg-green-700 text-gray-100 font-semibold rounded py-2">
                                    <span className="mr-3">{lnk.title}</span>
                                    {lnk.disabled? (<span></span>): (<ExternalLinkIcon className="h-5 w-5"/>)}
                                </a>
                            )}
                        </div>
                    </div>
                </LightCard>
            )}
        </div>
    </Section>
    )
}