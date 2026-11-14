"use client";

import dynamic from "next/dynamic";

// Carrega a biblioteca em um chunk separado, só no navegador, sem bloquear a página.
// Por padrão ela já ocupa o tamanho da janela.
const Confete = dynamic(() => import("react-confetti"), { ssr: false });

export default function ConfeteNaTela() {
  return <Confete recycle={false} />;
}
