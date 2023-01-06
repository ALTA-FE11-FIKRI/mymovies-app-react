import { ButtonHTMLAttributes, Component } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export class Button extends Component<ButtonProps> {
  render() {
    return (
      <button
        className="btn "
        {...this.props}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
