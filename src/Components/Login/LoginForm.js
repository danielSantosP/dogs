import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import {UserContext} from '../../UserContext'
import Error from '../Helper/Error'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'
import Head from '../Helper/Head'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const {userLogin, error, loading} = React.useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if(username.validate() && password.validate()){
     await userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        <Error error={error && 'Dados incorretos.'} />
      </form>
      <Link className={styles.lost} to="/login/perdeu">Perdeu a Senha?</Link>
      <div className={styles.signUp}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm
