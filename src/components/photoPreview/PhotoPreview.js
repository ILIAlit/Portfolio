import styles from "./../../styles/style-blog.module.css";

const PhotoPreview = (props) => {
  return (
    <div className={styles.main__project}>
                    <div className={styles.main__hovering}></div>
                    <img src={props.img} alt="photo"/>
                </div>
  );
}

export default PhotoPreview;