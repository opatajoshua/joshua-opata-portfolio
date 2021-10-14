import classnames from 'classnames';

export default function LightCard(props) {
    return (
        <div className={classnames('rounded light-card', props.className)}>
            {props.children}
        </div>
    )
}