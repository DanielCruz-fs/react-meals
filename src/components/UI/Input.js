import classes from './Input.module.css';

const Input = props => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* hack {...} -> type="someValue" */}
        <input id={props.input.id} {...props.input}></input>
    </div>
};

export default Input;