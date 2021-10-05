import React from 'react'

const PhotoPost = () => {
  
  const [token, setToken] = React.useState('')
  const [nome, setNome] = React.useState('')
  const [peso, setPeso] = React.useState('')
  const [idade, setIdade] = React.useState('')
  const [img, setImg] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('img', img)
    formData.append('nome', nome)
    formData.append('peso', peso)
    formData.append('idade', idade)

    const response = await fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      body: formData,
    })
    console.log('response: ', response)
    console.log('json: ', await response.json())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="token"
        name="token"
        type="text"
        value={token}
        placeholder="token"
        onChange={({target}) => setToken(target.value)}
      />
      <input
        id="nome"
        name="nome"
        type="text"
        value={nome}
        placeholder="nome"
        onChange={({target}) => setNome(target.value)}
      />
      <input
        id="peso"
        name="peso"
        type="text"
        value={peso}
        placeholder="peso"
        onChange={({target}) => setPeso(target.value)}
      />
      <input
        id="idade"
        name="idade"
        type="text"
        value={idade}
        placeholder="idade"
        onChange={({target}) => setIdade(target.value)}
      />
      <input
        id="imagem"
        name="imagem"
        type="file"
        onChange={({target}) => setImg(target.files[0])}
      />

      <button>Enviar</button>
    </form>
  )
}

export default PhotoPost
