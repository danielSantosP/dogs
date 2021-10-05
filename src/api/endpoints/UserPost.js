import React from 'react'

const UserPost = () => {
  
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      })
    })
    console.log('response: ', response)
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
      <input 
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={({target}) => setEmail(target.value)}
      />
      <button>Enviar</button>
    </form>
  )
}

export default UserPost
