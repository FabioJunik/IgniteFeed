import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../avatar';
import { Comment } from '../comment';

import styles from './styles.module.css';


export function Post({author, content, publishedAt}){
    const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'de' 2022 'às' HH:mm'h'",{
        locale: ptBR
    });

    const publisherDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true
    });

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarURL}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publisherDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(({type, content})=>{
                    if(type === 'paragraph')
                        return <p>{content}</p>
                    else if(type === 'link')
                       return <p><a href='#'>{content}</a></p>

                })}                
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