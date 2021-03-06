import React from 'react'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({id}) => {
  const {request, error, loading} = useFetch()
  async function handleClick(){
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if(confirm){
      const {url, options} = PHOTO_DELETE(id)
      const {response} = await request(url, options)
      if(response.ok) window.location.reload()
    }
  } 

  return (
    <>
      {error && <Error error={error} />}
      {loading 
        ? <button className={styles.delete} disabled>Deletando...</button> 
        : <button className={styles.delete} onClick={handleClick}>Deletar</button>
      }
      
    </>
  )
}

export default PhotoDelete
