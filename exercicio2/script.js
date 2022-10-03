const capturaImprimeLimpa = () => {
  const nome = document.getElementById("nome")
  const endereco = document.getElementById("endereco")
  const email = document.getElementById("email")

  console.log(nome.value)
  console.log(endereco.value)
  console.log(email.value)

  nome.value = " "
  endereco.value = " "
  email.value = " "
}

capturaImprimeLimpa()
