import { button, btnPrimary } from "./Button.module.css";

export default function Button({ children, primary }) {
  const primaryStyle = primary ? btnPrimary : "";

  return <button className={`${button} ${primaryStyle}`}>{children}</button>;
}
