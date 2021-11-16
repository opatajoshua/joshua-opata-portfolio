import { Tab } from "@headlessui/react";
import Section from "../components/Section";
import skills from '../data/skills.json';

export default function SkillsSection(props) {
    function tabClass(selected) {
        return (selected ? 'bg-gray-300 text-green-700 border-b-2 border-green-400' : 'bg-gray-700 text-gray-100')+' px-2 md:px-5 py-2 font-semibold text-sm md:text-lg'
    }
    return (
    <Section
        id="skills"
        title="SKILLS" 
        heading="The Stack i Work With" 
        description="">
        <div className="mt-0 max-w-full">
            <Tab.Group>
                <Tab.List className="flex flex-row justify-center">
                    <Tab className={({ selected }) => tabClass(selected)+' rounded-l-lg' }>
                        Highlight
                    </Tab>
                    <Tab className={({ selected }) => tabClass(selected) }>
                        Frontend
                    </Tab>
                    <Tab className={({ selected }) => tabClass(selected) }>
                        Backend
                    </Tab>
                    <Tab className={({ selected }) => tabClass(selected)+ ' rounded-r-lg' }>
                        Fullstack
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className="flex flex-row mt-10 flex-wrap justify-center">
                            {skills.filter(s=>s.categories.includes('highlight')).map((sk, i) => 
                                <div key={i} className="flex flex-col items-center m-3">
                                    <p className="text-sm">{sk.name}</p>
                                    <img src={`img/skills/${sk.image}`} alt={sk.image} className="w-10 h-10 object-center"/>
                                </div>
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="flex flex-row mt-10 flex-wrap justify-center">
                            {skills.filter(s=>s.categories.includes('frontend')).map((sk, i) => 
                                <div key={i} className="flex flex-col items-center m-3">
                                    <p className="text-sm">{sk.name}</p>
                                    <img src={`img/skills/${sk.image}`} alt={sk.image} className="w-10 h-10 object-center"/>
                                </div>
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="flex flex-row mt-10 flex-wrap justify-center">
                            {skills.filter(s=>s.categories.includes('backend')).map((sk, i) => 
                                <div key={i} className="flex flex-col items-center m-3">
                                    <p className="text-sm">{sk.name}</p>
                                    <img src={`img/skills/${sk.image}`} alt={sk.image} className="w-10 h-10 object-center"/>
                                </div>
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="flex flex-row mt-10 flex-wrap justify-center">
                            {skills.map((sk, i) => 
                                <div key={i} className="flex flex-col items-center m-3">
                                    <p className="text-sm">{sk.name}</p>
                                    <img src={`img/skills/${sk.image}`} alt={sk.image} className="w-10 h-10 object-center"/>
                                </div>
                            )}
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    </Section>
    )
}