import { useState, useEffect } from 'react';
import styles from './App.module.css';

import logoOrkut from './img/logotipoOrkut.svg.png';

export default function App() {

 const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [count, setCount] = useState(0);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagemAviso, setMensagemAviso] = useState('');
  const [status, setStatus] = useState('');
  const emailValido = "melissalima@gmail.com";
  const senhaValida = "123456";

  const upCount = (valor) => {
    setCount(prev => prev + valor);
  }; 

  useEffect(() => {
    if (count === 0) return;

    if (email === "" || senha === "") {
      setStatus("erro");
      setMensagemAviso("⚠ Preencha todos os campos!");
    }
  else if (email === emailValido && senha === senhaValida) {
      setStatus("sucesso");
      setMensagemAviso("Login efetuado com sucesso!");
    } 
    else {
      setStatus("erro");
      setMensagemAviso("Seus dados estão incorretos!");
    }

  }, [count]);

  return (
    <div className={styles.fundo}>
      
      <header className={styles.Logo}>
        <img 
          src={logoOrkut} 
          alt="Orkut logo" 
          className={styles.tamanhoDoLogo}
        />
      </header>

      <main className={styles.centralizarCard}>
        <div className={styles.CaixaLogin}>
          
          <p className={styles.textoDoSubtitulo}>
            Acesse o <span className={styles.corRosaDoOrkut}>Orkut</span> com a sua conta Google!
          </p>

          <div className={styles.inputs}>
            <input 
              type="text" 
              placeholder="E-mail ou número de celular"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
             className={status === "erro" ? styles.inputBordaErro : styles.inputBordaNormal}
            />

            <div className={styles.mostarInputESenha}>
              <input 
                type={mostrarSenha ? "text" : "password"} 
                placeholder="Senha"
                value={senha}
                onChange={(evento) => setSenha(evento.target.value)}
                className={status === "erro" ? styles.inputBordaErro : styles.inputBordaNormal}
              />
              
              <button 
                type="button" 
                className={styles.botaoTextoMostrarEsconder}
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? "Esconder" : "Mostrar"}
              </button>
            </div>
            
            {mensagemAviso && (
             <div className={status === "sucesso" ? styles.caixaMensagemSucesso : styles.caixaMensagemErro}>
                {mensagemAviso}
              </div>
            )}

            <div className={styles.linhaDoCheckbox}>
              <input type="checkbox" id="salvarSempre" />
              <label htmlFor="salvarSempre">Lembrar sempre do meu acesso</label>
            </div>

            <button 
              type="button" 
              className={styles.botaoEnviarFormulario} 
              onClick={() => upCount(1)}
            >
              ENTRAR
            </button>

          </div>
          
          <div className={styles.linksInferior}>
            <a href="#" className={styles.linkEsqueceuSenha}>Esqueci minha senha ou e-mail</a>
            <p className={styles.textoCriarConta}>
              Não tem conta? <a href="#" className={styles.linkCriarAgora}>Criar agora</a>
            </p>
          </div>

        </div>
      </main>

    </div>
  );
}

