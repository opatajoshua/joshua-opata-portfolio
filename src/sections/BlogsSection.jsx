import LightCard from "../components/LightCard";
import Section from "../components/Section";
import blogs from '../data/blogs.json';

export default function BlogsSection(props) {
    return (
    <Section
        id="blogs"
        title="BLOGS" 
        heading="My Latest Blogs" 
        description="I have begun my journey of blog writing.">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
            {blogs.map((proj, i) => 
                <LightCard key={i} className="flex flex-col m-3 overflow-hidden rounded-2xl">
                    <div className=" relative h-40 overflow-hidden">
                        <img className="w-full h-auto object-center absolute left-0 top-0 z-0" src={`img/blogs/${proj.image}`} alt={proj.image}/>
                    </div>
                    <div className="px-5 pb-5">
                        <div className="flex py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="flex-1 text-xs">{proj.date}</span>
                            <div>
                                <span className="flex flex-wrap items-center">
                                    {proj.skills.map((sk, j) => 
                                        <span key={j} className="text-xs px-3 py-1 bg-gray-700 text-green-400 rounded-2xl mr-1">{sk}</span>
                                    )}
                                </span>
                            </div>
                        </div>
                        <p className="text-base font-bold">{proj.name}</p>
                        <p className="text-sm truncate cursor-pointer hover:text-green-400 mt-2">{proj.description}</p>
                        <div className="flex mt-4">
                            {proj.links.map((lnk, k) => 
                                <a href={lnk.link} key={k} target='_blank' rel="noopener noreferrer" className="flex-1 flex items-center justify-center text-center bg-green-600 hover:bg-green-700 text-gray-100 font-semibold rounded py-2">
                                    <span className="mr-3">{lnk.title}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
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