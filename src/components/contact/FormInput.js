const FormInput = (props) => {
  const { label, name, type, inputClassName, labelClassName } = props;

  const newProps = { ...props };
  for (const prop in newProps) {
    if (
      prop === "label" ||
      prop === "name" ||
      prop === "type" ||
      prop === "className" ||
      prop === "id" ||
      prop === "inputClassName" ||
      prop === "labelClassName"
    ) {
      delete newProps[prop];
    }
  }

  if (type === "textarea") {
    return (
      <div className="form-row">
        <label className={`form-label ${labelClassName}`} htmlFor={name}>
          {label}
        </label>
        <textarea
          className={`form-textarea ${inputClassName}`}
          type="text"
          name={name}
          id={name}
          {...newProps}
        />
      </div>
    );
  }
  if (type === "alert") {
    return (
      <div className="form-row">
        <div className={props.className} id="contactUsFormAlert" {...newProps}>
          {props.name}
        </div>
      </div>
    );
  }
  if (type === "submit") {
    return (
      <div className="form-row">
        <button
          className={`btn-block btn-bsh-regular ${props.className}`}
          type="submit"
          {...newProps}
        >
          {props.name}
        </button>
      </div>
    );
  }
  return (
    <div className="form-row">
      <label className={`form-label ${labelClassName}`} htmlFor={name}>
        {label}
      </label>
      <input
        className={`form-input ${inputClassName}`}
        type={type}
        name={name}
        id={name}
        {...newProps}
      />
    </div>
  );
};

export default FormInput;
