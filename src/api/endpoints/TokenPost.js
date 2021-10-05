import React from 'react'

const TokenPost = () => {
  
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [token, setToken] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
    const json = await response.json()
    setToken(json.token)
    console.log('response: ', response)
    console.log('json: ', json)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="username"
        name="username"
        type="text"
        value={username}
        placeholder="Username"
        onChange={({target}) => setUsername(target.value)}
      />
      <input 
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={({target}) => setPassword(target.value)}
      />
      <button>Enviar</button>
      <p style={{wordBreak: 'break-all'}}>{token}</p>
    </form>
  )
}

export default TokenPost
