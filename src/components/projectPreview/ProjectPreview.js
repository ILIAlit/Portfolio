import styles from '../../styles/style-index.module.css';

function ProjectPreview(props) {
  function onClick() {
    window.location.href = `/project/${props.index}`;
  }

  return (
    <div onClick={(event) => onClick(event)} className={styles.main__project}>
      <div className={styles.main__hovering}>
        <span>{props.title}</span>
      </div>
      <img src={props.cover} alt={props.title} />
    </div>
  );
}

export default ProjectPreview;
