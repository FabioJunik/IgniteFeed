import styles from './styles.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../avatar';


export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/antoniopedromuteka.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>António Muteka</strong>
                            <time title='28 de Semtembro de 2022' dateTime='2022-09-28'>Cerca de uma hora atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}