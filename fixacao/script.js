const lerTexto = () => {
  const texto = document.getElementById("texto")
  let paragrafo = document.getElementById("paragrafo")
  paragrafo.innerHTML = texto.value
  console.log(texto.value)
  texto.value = ""
}
