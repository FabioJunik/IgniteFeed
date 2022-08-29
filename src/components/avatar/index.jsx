import styles from './styles.module.css';


export function Avatar({src, hasBorder = true}){
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
            src={src}
        />
    )
}