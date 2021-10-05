import React from 'react'

const PhotoGet = () => {
  const [id, setId] = React.useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
    const json = await response.json()
    console.log('response: ', response)
    console.log('JSON: ', json)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={id} placeholder="id" onChange={({target}) => setId(target.value)}/>
      <button>Enviar</button>
    </form>
  )
}

export default PhotoGet
