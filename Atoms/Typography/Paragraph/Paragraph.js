import styles from "./Paragraph.module.css";

export default function Paragraph({
  children,
  textColor,
  className,
  ...props
}) {
  return (
    <p
      {...props}
      className={`${styles.paragraph} ${styles[textColor]} ${className}`}
    >
      {children}
    </p>
  );
}
