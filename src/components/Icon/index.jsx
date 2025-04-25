import { svgImg } from "./Icon.module.css";

export default function Icon({ className, ...rest }) {
  return <img {...rest} className={[svgImg, className]} />;
}
