import './CustomInput.scss';

type CustomInputProps = {
  label?: string;
  classes?: string;
  placeholder?: string;
  name?: string;
  value?: string[];
};

const CustomInput = (props: CustomInputProps) => {
  const { label, classes, placeholder, name, value } = props;
  return (
    <div className='form-group'>
      <input
        type='text'
        className={`form-input ${classes}`}
        placeholder={placeholder}
      />
      {label && (
        <label
          className={`form-input-label ${value?.length ? 'shrink' : ''}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CustomInput;
