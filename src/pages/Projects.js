import styles from "./../styles/style-index.module.css";
import ProjectPreview from "../components/projectPreview/ProjectPreview";
import {projectsList} from "./../helpers/projectsList";




const Projects = () => {
    return (
        <main className={`${styles.main} _container`}>
                        <div className={styles.main__info}>
                            <div className={styles.main__title}>
                                <h3>Привет!</h3>
                            </div>
                            <div className={styles.main__text}><span>
                                    Здесь вы найдете обзор моих работ и достижений
                                    в качестве веб-дизайнера и front-end разработчика.</span>
                            </div>
                        </div>
                        <div className={styles.main__projects}>
                            {projectsList.map((project, index) => {
                                return (<ProjectPreview 
                                key={index} 
                                title={project.title} 
                                cover={project.cover} 
                                index={index}
                                />)
                            })}
                        </div>
                    </main>
    );
}

export default Projects;