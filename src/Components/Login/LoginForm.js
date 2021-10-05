import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/ v1/token',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        })
      }
    )
    const json = await response.json()
    console.log(response, json)
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Usuário
          <input id="username" name="username" type="text" value={username} onChange={({target}) => setUsername(target.value)} />
        </label>
        <label htmlFor="password">
          Senha
          <input id="password" name="password" type="password" value={password} onChange={({target}) => setPassword(target.value)}/>
        </label>
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
      <Link to="/login/perdeu">Resetar senha</Link>
      <Link to="/login/resetar">Perdeu a senha</Link>
    </section>
  )
}

export default LoginForm
