import styles from "./../styles/style-progect.module.css";
import BtnGit from "../components/btnGit/BtnGit";

import { projectsList } from "../helpers/projectsList";

import { useParams } from "react-router";

const Project = () => {
  const {id} = useParams();
  const project = projectsList[id];

  return (
    <main className={`${styles.main} _container`}>

            <div className={styles.main__info}>
                <div className={styles.main__text}><span>{project.text}</span></div>
                {project.gitLink && (
                  <BtnGit src={project.gitLink}/>
                )}
            </div>

            <div className={styles.main__project}>
                <img src={project.content} alt={project.title} />

                {project.videoSrc && (
                  <div className={styles.main__video}>
                    <video controls loop poster={project.cover}>
                        <source src={project.videoSrc} />
                    </video>
                </div>
                )}
            </div>
        </main>
  );
}

export default Project;