import styles from "./../styles/style-blog.module.css";
import PhotoPreview from "../components/photoPreview/PhotoPreview";
import { photoesList } from "../helpers/photoesList";

const Blog = () => {
  return (
    <main className={`${styles.main} _container`}>
            <div className={styles.main__info}>
                <div className={styles.main__title}>
                    <h3>Фото блог</h3>
                </div>
                <div className={styles.main__text}><span>Раздел фото блога - это мое цифровое альбомное пространство, где вы можете насладиться разнообразием тематик и жанров</span></div>
            </div>


            <div className={styles.main__projects}>
                {photoesList.map((photo, index) => {
                  return <PhotoPreview key={index} img={photo.img}/> 
                })}
            </div>
        </main>
  );
}

export default Blog;