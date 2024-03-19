import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
        />
        <button className={styles.button} type="button">
          Pick an image
        </button>
      </div>
    </div>
  );
}
