import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from '../avatar';
import { Comment } from '../comment';

import styles from './styles.module.css';


export function Post({author, content, publishedAt}){
    const [comments, setComments] = useState(['Este poste está muito massa!'])
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'de' 2022 'às' HH:mm'h'",{
        locale: ptBR
    });

    const publisherDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment(e) {
        e.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }


    function deleteComment(commentToDelete) {
        setComments(comments.filter(comment => comment !== commentToDelete));
    }

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
                        return <p key={content}>{content}</p>
                    else if(type === 'link')
                       return <p key={content}><a href='#'>{content}</a></p>

                })}                
            </div>
            <form 
                className={styles.commentForm}
                onSubmit={handleCreateNewComment}
            >
                <strong>Deixe seu feedback</strong>

                <textarea
                    value={newCommentText}
                    onChange={(e)=>setNewCommentText(e.target.value)}
                    placeholder='Deixe seu comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>(
                    <Comment 
                        key={comment} 
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article>
    )
}