//validação nome
var inputName = document.querySelector('#nome')
console.log(inputName)

inputName.addEventListener('keypress', function (e) {
  var keyCode = e.keyCode ? e.keyCode : e.wich

  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault()
  }

  if (!checkChar(e)) {
    e.preventDefault()
  }

  //const pattern = '[a-zA-Z]'
})
function checkChar(e) {
  const char = String.fromCharCode(e.keyCode)

  //console.log(e.keyCode)
  //console.log(char)

  const pattern = '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]'

  if (char.match(pattern)) {
    console.log(char)
    return true
  }
}

//mascara cpf
const input = document.querySelector('#cpf')
input.addEventListener('keypress', () => {
  let inputLength = input.value.length

  console.log(inputLength)

  if (inputLength == 3 || inputLength == 7) {
    input.value += '.'
  } else if (inputLength == 11) {
    input.value += '-'
  }
})

//mascara celular
const telInput = document.querySelector('#telefone')
telInput.addEventListener('keypress', () => {
  let inputL = telInput.value.length

  console.log(inputL)
  if (inputL == 0) {
    telInput.value += '('
  } else if (inputL == 3) {
    telInput.value += ')'
  } else if (inputL == 9) {
    telInput.value += '-'
  }
})

var button = document.querySelector('#submit')

button.addEventListener('click', function (event) {
  event.preventDefault()

  var name = document.querySelector('#nome')
  var cpf = document.querySelector('#cpf')
  var email = document.querySelector('#email')
  var tel = document.querySelector('#telefone')
  var dataN = document.querySelector("#data_nascimento")
  var city = document.querySelector('#cidade')
  var state = document.querySelector('#estado')
  var address = document.querySelector('#endereco')
 

  if (name.value == '') {
    alert('Digite seu nome, por gentileza!')
    return
  } else if (email.value == '') {
    alert('Digite seu email, por gentileza!')
    return
  } else if (tel.value == '') {
    alert('Digite seu telefone, por gentileza!')
    return
  } else if (city.value == '') {
    alert('Digite sua cidade, por gentileza!')
    return
  } else if (state.value == '') {
    alert('Digite seu estado, por gentileza!')
    return
  } else if (address.value == '') {
    alert('Digite seu endereço, por gentileza!')
    return
  }

  //validação cpf
  console.log(cpf.value)
  var cpfValor = cpf.value
  var cpfSoNumeros = cpfValor.replace(/[^\d]/g, '')
  console.log(cpfSoNumeros)
  var novePrimeiros = cpfSoNumeros.substr(0, 11)
  console.log(novePrimeiros)
  var soma = 0
  soma += novePrimeiros[0] * 10
  soma += novePrimeiros[1] * 9
  soma += novePrimeiros[2] * 8
  soma += novePrimeiros[3] * 7
  soma += novePrimeiros[4] * 6
  soma += novePrimeiros[5] * 5
  soma += novePrimeiros[6] * 4
  soma += novePrimeiros[7] * 3
  soma += novePrimeiros[8] * 2
  soma = (soma * 10) % 11

  console.log(' Primeiro número é ' + soma)
  //console.log(novePrimeiros[9])
  // if(soma != cpf[9]){
  //   return false;
  // }

  var somar = 0
  somar += novePrimeiros[0] * 11
  somar += novePrimeiros[1] * 10
  somar += novePrimeiros[2] * 9
  somar += novePrimeiros[3] * 8
  somar += novePrimeiros[4] * 7
  somar += novePrimeiros[5] * 6
  somar += novePrimeiros[6] * 5
  somar += novePrimeiros[7] * 4
  somar += novePrimeiros[8] * 3
  somar += novePrimeiros[9] * 2
  somar = (somar * 10) % 11

  console.log('Segundo número é: ' + somar)

  console.log(novePrimeiros[9])
  console.log(novePrimeiros[10])

  if (novePrimeiros[9] == soma && novePrimeiros[10] == somar) {
  } else {
    alert('CPF inválido')
    return
  }

  var cadastroTr = document.createElement('tr')

  //cadastroTr.classList("cadastro")
  var nomeTd = document.createElement('td')
  var cpfTd = document.createElement('td')
  var emailTd = document.createElement('td')
  var telefoneTd = document.createElement('td')
  var dataTd = document.createElement('td')
  var cidadeTd = document.createElement('td')
  var estadoTd = document.createElement('td')
  var enderecoTd = document.createElement('td')




    nomeTd.textContent = name.value
    cpfTd.textContent = cpf.value
    emailTd.textContent = email.value
    telefoneTd.textContent = tel.value
    dataTd.textContent = dataN.value
    cidadeTd.textContent = city.value
    estadoTd.textContent = state.value
    enderecoTd.textContent = address.value

    cadastroTr.appendChild(nomeTd)
    cadastroTr.appendChild(cpfTd)
    cadastroTr.appendChild(emailTd)
    cadastroTr.appendChild(telefoneTd)
    cadastroTr.appendChild(dataTd)
    cadastroTr.appendChild(cidadeTd)
    cadastroTr.appendChild(estadoTd)
    cadastroTr.appendChild(enderecoTd)

    var tabela = document.querySelector("#tab")
    tabela.appendChild(cadastroTr)

 
})
var clientes = document.querySelectorAll(".cadastro");

clientes.forEach(function(paciente) {
  paciente.addEventListener("dblclick", function() {
    this.remove();
  });

})

