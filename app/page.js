"use client";

import { useState } from "react";

const curiosidades = [
  "Chihuahuas são a menor raça de cachorro do mundo.",
  "O nome da raça vem do estado de Chihuahua, no México.",
  "Chihuahuas de pelo longo trocam menos pelo do que muita gente imagina.",
  "Eles costumam escolher uma pessoa favorita da família.",
  "Chihuahuas podem viver mais de 15 anos com bons cuidados.",
  "Apesar do tamanho, eles se acham verdadeiros leões — combina com o nome Simba!",
];

export default function Home() {
  const [carinhos, setCarinhos] = useState(0);
  const [curiosidade, setCuriosidade] = useState("");
  // "n" muda a cada ação: usado como key para reiniciar as animações
  const [acao, setAcao] = useState({ classe: "", balao: "", n: 0 });

  function fazerCarinho() {
    setCarinhos(carinhos + 1);
    setAcao({ classe: "feliz", balao: "💕 O Simba adorou!", n: acao.n + 1 });
  }

  function latir() {
    setAcao({ classe: "latindo", balao: "Au au! 🐶", n: acao.n + 1 });
  }

  function mostrarCuriosidade() {
    setCuriosidade(curiosidades[Math.floor(Math.random() * curiosidades.length)]);
  }

  return (
    <>
      <header>
        <h1>Simba</h1>
        <p className="subtitulo">Chihuahua de pelo longo · pequeno no tamanho, gigante na personalidade</p>
      </header>

      <main>
        <section className="cartao foto">
          {/* Pelagem preta, topo da cabeça branco, peito branco e pontas das patas brancas */}
          <svg key={acao.n} id="simba" className={acao.classe} onClick={fazerCarinho} viewBox="0 0 300 300" role="img" aria-label="Ilustração do Simba, um chihuahua preto de pelo longo com o topo da cabeça, o peito e as pontas das patas brancos">
            <path className="rabo" d="M205 190 C250 170 260 120 235 105 C250 135 225 165 200 175 Z" fill="#1b1b1b" />
            <ellipse cx="150" cy="200" rx="62" ry="50" fill="#1b1b1b" />
            <path d="M125 165 C130 215 170 215 175 165 C165 185 135 185 125 165 Z" fill="#f5f5f5" />
            <rect x="112" y="225" width="20" height="45" rx="9" fill="#1b1b1b" />
            <rect x="168" y="225" width="20" height="45" rx="9" fill="#1b1b1b" />
            <ellipse cx="122" cy="268" rx="12" ry="7" fill="#f5f5f5" />
            <ellipse cx="178" cy="268" rx="12" ry="7" fill="#f5f5f5" />
            <path d="M95 105 L80 30 L135 80 Z" fill="#1b1b1b" />
            <path d="M205 105 L220 30 L165 80 Z" fill="#1b1b1b" />
            <path d="M80 30 L70 45 L84 52 L72 66 L88 72 L80 88" stroke="#1b1b1b" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M220 30 L230 45 L216 52 L228 66 L212 72 L220 88" stroke="#1b1b1b" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M100 85 L95 50 L122 78 Z" fill="#5a3b3b" />
            <path d="M200 85 L205 50 L178 78 Z" fill="#5a3b3b" />
            <ellipse cx="150" cy="115" rx="58" ry="50" fill="#1b1b1b" />
            <path d="M128 70 C140 62 160 62 172 70 C165 85 158 100 150 108 C142 100 135 85 128 70 Z" fill="#f5f5f5" />
            <circle cx="127" cy="115" r="10" fill="#2a1a10" />
            <circle cx="173" cy="115" r="10" fill="#2a1a10" />
            <circle cx="130" cy="111" r="3" fill="#fff" />
            <circle cx="176" cy="111" r="3" fill="#fff" />
            <ellipse cx="150" cy="140" rx="20" ry="14" fill="#2b2b2b" />
            <ellipse cx="150" cy="134" rx="7" ry="5" fill="#000" />
            <path d="M143 146 Q150 152 157 146" stroke="#000" strokeWidth="2" fill="none" />
            <ellipse className="lingua" cx="150" cy="154" rx="6" ry="8" fill="#e8798a" />
          </svg>
          <p key={`b${acao.n}`} className="balao" aria-live="polite">{acao.balao}</p>
        </section>

        <section className="cartao">
          <h2>Quem é o Simba?</h2>
          <p>
            O Simba é um chihuahua de pelo longo, com uma pelagem preta e brilhante.
            Ele tem detalhes brancos que deixam tudo ainda mais charmoso:
          </p>
          <ul className="detalhes">
            <li><span className="bolinha" /> O topo da cabeça branquinho</li>
            <li><span className="bolinha" /> O peito de pelo branco</li>
            <li><span className="bolinha" /> As pontinhas das patinhas brancas</li>
          </ul>
        </section>

        <section className="cartao">
          <h2>Faça um carinho</h2>
          <div className="botoes">
            <button onClick={fazerCarinho}>🐾 Fazer carinho</button>
            <button onClick={latir}>🔊 Latir</button>
            <button onClick={mostrarCuriosidade}>💡 Curiosidade</button>
          </div>
          <p>Carinhos recebidos hoje: <strong>{carinhos}</strong></p>
          <p className="curiosidade">{curiosidade}</p>
        </section>
      </main>

      <footer>
        <p>Feito com ❤️ para o Simba</p>
      </footer>
    </>
  );
}
