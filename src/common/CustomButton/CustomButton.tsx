import './CustomButton.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

type CustomButtonProps = {
  children: React.ReactNode;
  buttonType?: keyof typeof BUTTON_TYPE_CLASSES;
  disabled: boolean;
};

const CustomButton = (props: CustomButtonProps) => {
  const { children, buttonType, disabled } = props;
  return (
    <button
      className={`custom-button ${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
