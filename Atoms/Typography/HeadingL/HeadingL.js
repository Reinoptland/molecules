import styles from "./HeadingL.module.css";

export default function HeadingL({ children, textColor, className, ...props }) {
  return (
    <h1
      {...props}
      className={`${styles.heading} ${styles[textColor]} ${className}`}
    >
      {children}
    </h1>
  );
}
