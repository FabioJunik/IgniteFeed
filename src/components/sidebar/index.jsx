import styles from './styles.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=50"
            />
            <div className={styles.profile}>
                <strong>Fábio Junik</strong>
                <span>Front End Developer</span>
            </div>

            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    )
}