import styles from "./Button.module.css";

export default function Button({
  children,
  size,
  variant,
  className,
  ...props
}) {
  return (
    <button
      {...props}
      className={`${styles.btn} ${styles[size]} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
