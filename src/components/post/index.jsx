import { Comment } from '../comment';
import styles from './styles.module.css';


export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/fabiojunik.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Fábio Junik</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='08 de Agosto de 2022 as 06:40' dateTime='2022-08-28 06:40'>Públicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                    <p>Fala galeraa 👋</p>

                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p><a href='#'>👉 jane.design/doctorcare</a></p>

                    <p>
                        <a href='#'>#novoprojeto</a>{' '}
                        <a href='#'>#nlw</a>{' '}
                        <a href='#'>#rocketseat</a>
                    </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe seu comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}