import Section from "../components/Section";
import skills from '../data/skills.json';

export default function SkillsSection(props) {
    return (
    <Section
        id="skills"
        title="SKILLS" 
        heading="My Fullstack Skills" 
        description="These are some of my skills i use to provide fullstack solutions across platforms">
        <div className="flex flex-row mt-10 flex-wrap justify-center">
            {skills.map((sk, i) => 
                <div key={i} className="flex flex-col items-center m-3">
                    <p className="text-sm">{sk.name}</p>
                    <img src={`img/skills/${sk.image}`} alt={sk.image} className="w-10 h-10 object-center"/>
                </div>
            )}
        </div>
    </Section>
    )
}