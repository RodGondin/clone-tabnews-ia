"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Confete() {
  const [tamanho, setTamanho] = useState(null);

  // Só renderiza no navegador, depois de conhecer o tamanho da janela
  useEffect(() => {
    setTamanho({ largura: window.innerWidth, altura: window.innerHeight });
  }, []);

  if (!tamanho) return null;

  return <Confetti width={tamanho.largura} height={tamanho.altura} recycle={false} />;
}
