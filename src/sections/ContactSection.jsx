import Section from "../components/Section";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function ContactSection(props) {
    return (
    <Section
        id="contact"
        title="CONTACT" 
        heading="CHECK ME OUT" 
        description="">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10 w-full">
            <a href="mailto:opatajoshua@gmail.com" className="group">
                <div className="flex items-center text-gray-400">
                    <FaEnvelope className="mr-1"/>
                    EMAIL
                </div>
                <span className="flex">
                    opatajoshua@gmail.com
                    <ExternalLinkIcon className="ml-2 w-5 h-5 text-green-400 opacity-70 group-hover:opacity-100"/>
                </span>
            </a>
            <a href="tel:+233501232332" className="group">
                <div className="flex items-center text-gray-400">
                    <FaPhoneAlt className="mr-1"/>
                    PHONE
                </div>
                <span className="flex">
                    +233 50 123 2332
                    <ExternalLinkIcon className="ml-2 w-5 h-5 text-green-400 opacity-70 group-hover:opacity-100"/>
                </span>
            </a>
            <a href='https://stackoverflow.com/users/14362614/joshua-opata' target='_blank' rel="noreferrer" className="group">
                <div className="flex items-center text-gray-400">
                    <FaStackOverflow className="mr-1"/>
                    STACK OVERFLOW
                </div>
                <span className="flex">
                    joshua-opata
                    <ExternalLinkIcon className="ml-2 w-5 h-5 text-green-400 opacity-70 group-hover:opacity-100"/>
                </span>
            </a>
            <a href="https://github.com/opatajoshua" target='_blank' rel="noreferrer" className="group">
                <div className="flex items-center text-gray-400">
                    <FaGithub className="mr-1"/>
                    GITHUB
                </div>
                <span className="flex">
                    opatajoshua
                    <ExternalLinkIcon className="ml-2 w-5 h-5 text-green-400 opacity-70 group-hover:opacity-100"/>
                </span>
            </a>
            <a href="https://www.linkedin.com/in/joshua-opata-8b9604a3" target='_blank' rel="noreferrer" className="group">
                <div className="flex items-center text-gray-400">
                    <FaLinkedin className="mr-1"/>
                    LINKEDIN
                </div>
                <span className="flex">
                    /in/joshua-opata-8b9604a3
                    <ExternalLinkIcon className="ml-2 w-5 h-5 text-green-400 opacity-70 group-hover:opacity-100"/>
                </span>
            </a>
            <a href="https://twitter.com/JOLk22" target='_blank' rel="noreferrer" className="group">
                <div className="flex items-center text-gray-400">
                    <FaTwitter className="mr-1"/>
                    TWITTER
                </div>
                <span className="flex">
                    JOLk22
                    <ExternalLinkIcon className="ml-2 w-5 h-5 text-green-400 opacity-70 group-hover:opacity-100"/>
                </span>
            </a>
        </div>
    </Section>
    )
}