function verificarCodigo() {
  const codigo = document.getElementById("codigo").value.trim().toUpperCase();
  const conteudo = document.getElementById("conteudo");

  if (codigo === "STITCH2025") {
    conteudo.classList.remove("escondido");
  } else {
    alert("Código incorreto! Tente novamente ❤️");
  }
}
