import styles from "./Card.module.css";

export default function Card({
  children,
  shadow,
  variant,
  className,
  ...props
}) {
  return (
    <div
      {...props}
      className={`${styles.card} ${shadow ? styles.shadow : ""} ${
        styles[variant]
      } ${className} `}
    >
      {children}
    </div>
  );
}
