import './App.css';
import NavBar from './components/NavBar';
import Perfil from './components/abas/RedeSocial';
import Cartao from './components/abas/CardApresentação';
import Musica from './components/abas/CardMusica';
import Filme from './components/abas/CardFilme';
import Mensagens from './components/abas/CardMensagem';
import Links from './components/abas/CardLinks';
import Jogo from './components/abas/CardFavorito';
import SobreMim from './components/abas/CardSobreMim';
import Welcome from './components/abas/CardBoasVindas';
import Turma from './components/abas/CardTurma';
import Recado from './components/abas/CardRecado';
import Evento from './components/abas/CardEvento';
import Footer from './components/Footer';

function App() {
  return (
    <div className="Flex">
      <NavBar />

      <section id="inicio" className="inicio">
        <h1><strong>Micro sites</strong></h1>
        <p>
          Um grande site com diversos micro sites dentro, para treinar minhas
          capacidades em React.
        </p>
      </section>

      <section id="apresentacao">
        <Cartao />
      </section>

      <section id="rede">
        <Perfil />
      </section>

      <section id="musica">
        <Musica />
      </section>

      <section id="filme">
        <Filme />
      </section>

      <section id="mensagem">
        <Mensagens />
      </section>

      <section id="link">
        <Links />
      </section>

      <section id="jogo">
        <Jogo />
      </section>

      <section id="mim">
        <SobreMim />
      </section>

      <section id="welcome">
        <Welcome />
      </section>

      <section id="turma">
        <Turma />
      </section>

      <section id="recado">
        <Recado />
      </section>

      <section id="evento">
        <Evento />
      </section>

      <Footer />
    </div>
  );
}

export default App;