import styles from "./SubHeading.module.css";

export default function SubHeading({
  children,
  textColor,
  className,
  ...props
}) {
  return (
    <h2
      {...props}
      className={`${styles.paragraph} ${styles[textColor]} ${className}`}
    >
      {children}
    </h2>
  );
}
