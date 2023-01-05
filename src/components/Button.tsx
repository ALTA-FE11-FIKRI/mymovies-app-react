import { ButtonHTMLAttributes, Component } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export class Button extends Component<ButtonProps> {
  render() {
    return (
      <button
        className="bg-gray-600 border border-black-500"
        {...this.props}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
