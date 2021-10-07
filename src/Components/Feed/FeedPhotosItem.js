import React from 'react'
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({photo, setModalPhoto}) => {
  
  function handleclick(){
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleclick}>
       <img src={photo.src} alt={photo.title} />
       <span className={styles.visualization}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem