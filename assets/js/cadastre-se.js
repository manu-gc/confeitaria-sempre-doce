const password = document.getElementById('password')
   const confirmaPassword = document.getElementById('confirma-password')

function cadastrarUsuario() {
   const nome = document.getElementById('nome')
   const email = document.getElementById('email')
  

   if (password.value == confirmaPassword.value){
    // Cadastrar mo local storage

    // Verifica a lista existe no local storege
    let lista = window.localStorage.getItem('usuarios')

    if (lista == undefined){
        // Não existe a lista, então cria e adiciona o usuário
        lista = []

        // Adicionar o ususario na lista
        let usuarios = {
            'nome': nome.value,
            'email': email.value,
            'password': password.value 
        }
        lista.push(usuarios) 

        // salvar no local storage a lista
        window.localStorage.setItem('usuarios', JSON.stringify(lista))
        alert('Usuário cadastrado.')
    } else {
        // Adicionar novos usuários
        // Primeiro buscar a lista no local storage
        let listaE = window.localStorage.getItem('usuarios')
        listaE = JSON.parse(lista)

        let usuarioA = {
            'nome': nome.value,
            'email': email.value,
            'password': password.value
        }

        // Adiciona na lista
        listaE.push(usuarioA)

        // Salvar no local storage
        window.localStorage.setItem('usuarios', JSON.stringify(listaE))
        alert('Usuário cadastrado.')

        // Limpar os dados dos campos
        nome.value = ''
        email.value = ''
        password.value = ''
        confirmaPassword.value = ''
    }

   } else{
    alert ('Senha incorreta, verifique seus dados.')
    password.value = ''
    confirmaPassword.value = ''
   }
}

function toggleSenha () {
    const exibirSenha = document.getElementById('exibirSenha')

    if (exibirSenha.checked == true) {
        // Mostrar as senhas
        password.type = 'text'
        confirmaPassword.type = 'text'
    } else {
        // Esconder as senhas
         password.type = 'password'
        confirmaPassword.type = 'password'
    }
}