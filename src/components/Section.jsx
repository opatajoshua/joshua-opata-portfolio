import PropTypes from 'prop-types';

export default function Section(props) {
    return (
        <section id={props.id} className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col items-center">
            <p className="text-green-400 font-bold text-sm">{props.title}</p>
            <p className="font-bold text-2xl mt-4">{props.heading}</p>
            <p className="mt-3">{props.description}</p>
            {props.children}
        </section>
    )
}

Section.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
};