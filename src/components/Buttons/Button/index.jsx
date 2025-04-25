import { button, btnPrimary } from "./Button.module.css";

export default function Button({ children, primary, className }) {
  const primaryStyle = primary ? btnPrimary : "";

  return (
    <button className={`${button} ${primaryStyle} ${className}`}>
      {children}
    </button>
  );
}
