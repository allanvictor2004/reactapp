import { useState } from 'react'
 
export function Login() {

  const [senha, setSenha] = useState('')
  const [email, setEmail] = useState('')

  function handleEntrar() {
   console.log(email);
   console.log(senha);
  }

  return (
    <div>
      <form>
        
        <label>
          <span>Email</span>
          <input value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
         
        <label>
          <span>Senha</span>
          <input type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>

      </form>
    </div>
  )
}