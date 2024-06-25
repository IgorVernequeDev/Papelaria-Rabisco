# Importe os módulos necessários
import os
import mysql.connector

# Conecte-se ao banco de dados MySQL
conexaoDB = mysql.connector.connect(
    host="localhost",
    user="root",
    password="senai",
    database="papelaria"
)
cursor = conexaoDB.cursor()

# Função para limpar a tela e imprimir o cabeçalho


def header():
    os.system('cls')
    print("- " * 20)
    print("*** SISTEMA PAPELARIA ***")

# Função para obter um produto pelo nome


def get_produto(nome):
    cursorDB = conexaoDB.cursor()
    comandoSQL = f'SELECT * FROM Produto WHERE nome = "{nome}"'
    cursorDB.execute(comandoSQL)
    resultado = cursorDB.fetchone()
    cursorDB.close()
    return resultado

# Função para obter um produto pelo ID


def get_produto_id(id):
    cursorDB = conexaoDB.cursor()
    comandoSQL = f'SELECT * FROM Produto WHERE idProduto = "{id}"'
    cursorDB.execute(comandoSQL)
    resultado = cursorDB.fetchone()
    cursorDB.close()
    return resultado

# Função para cadastrar um novo produto


def cadastrar_produto():
    header()
    try:
        # Solicita os dados do novo produto
        nome = input("Digite o nome do produto: ")
        descricao = input("Digite a descrição do produto: ")
        while True:
            preco = float(input("Digite o preço unitário do produto: "))
            if preco <= 0 or preco > 10000:
                print("Quantidade inválida.")
            else:
                break
        while True:
            quantidade = int(
                input("Digite a quantidade disponível do produto: "))
            if quantidade < 0 or quantidade > 1000:
                print("Quantidade inválida.")
            else:
                break
        # Executa o comando SQL para inserir o novo produto
        comandoSQL = f"INSERT INTO produto VALUES (null,'{nome}','{descricao}',{preco},{quantidade});"
        cursor.execute(comandoSQL)
        conexaoDB.commit()
        print("Produto cadastrado.")
    except mysql.connector.Error as erro:
        # Trata erros durante o cadastro do produto
        print(f"Erro: Insira as informações corretamente. {erro} ")

# Função para alterar a quantidade de um produto


def alterar_quantidade():
    header()
    while True:
        try:
            nome = input(
                "Digite o nome do produto para alterar sua quantidade: ")
            produto = get_produto(nome)
            print(
                f"ID: {produto[0]} - NOME: {produto[1]} - QUANTIDADE ATUAL: {produto[4]}")
            quantidade = int(input("Insira a nova quantia do produto: "))
            if quantidade < 0 or quantidade > 10000:
                print("Quantidade inválida.")
            elif produto == produto[4]:
                print("A quantidade atualizada é a mesma da anterior.")
            else:
                # Executa o comando SQL para atualizar a quantidade do produto
                cursor = conexaoDB.cursor()
                cursor.execute(
                    f'UPDATE produto SET quantidade = {quantidade} WHERE nome = "{nome}";')
                print("Quantidade alterada.")
            break
        except:
            os.system('cls')
            print("Produto não encontrado.")

# Função para alterar o preço de um produto


def alterar_preco():
    header()  # Limpa a tela e imprime o cabeçalho
    while True:
        try:
            nome = input("Digite o nome do produto para alterar seu preço: ")
            # Obtém informações do produto pelo nome
            produto = get_produto(nome)
            print(
                f"ID: {produto[0]} - NOME: {produto[1]} - PREÇO ATUAL: {produto[3]}")
            # Solicita o novo preço do produto
            preco = float(input("Insira o novo preço do produto: "))
            if preco < 0 or preco > 10000:
                print("Quantidade inválida.")  # Verifica se o preço é válido
            elif preco == produto[3]:
                # Mensagem se o novo preço for igual ao anterior
                print("A quantidade atualizada é a mesma da anterior.")
            else:
                confirm = input(
                    "Tem certeza que deseja alterar? (Digite 's' para confirmar) \n")  # Solicita confirmação para a alteração
                if confirm == 's':
                    cursor = conexaoDB.cursor()
                    # Executa o comando SQL para atualizar o preço do produto
                    cursor.execute(
                        f'UPDATE produto SET preco= {preco} WHERE nome = "{nome}";')
                    print("Quantidade alterada.")  # Mensagem de confirmação
                    break  # Sai do loop
                else:
                    # Mensagem se a exclusão for cancelada
                    print("Exclusão cancelada.")
                    break  # Sai do loop
        except:
            os.system('cls')  # Limpa a tela
            # Mensagem se o produto não for encontrado
            print("Produto não encontrado.")

# Função para alterar o nome de um produto


def alterar_nome():
    header()  # Limpa a tela e imprime o cabeçalho
    while True:
        try:
            id = input("Digite o id do produto para alterar seu nome: ")
            # Obtém informações do produto pelo ID
            produto = get_produto_id(id)
            # Imprime informações do produto
            print(f"ID: {produto[0]} - NOME ATUAL: {produto[1]}")
            # Solicita o novo nome do produto
            novo_nome = input("Insira o novo nome do produto: ")
            if novo_nome == produto[1]:
                # Mensagem se o novo nome for igual ao anterior
                print("O nome atualizado é o mesmo do anterior.")
            else:
                # Solicita confirmação para a alteração
                confirm = input(
                    "Tem certeza que deseja alterar? (Digite 's' para confirmar) \n")
                if confirm == 's':
                    cursor = conexaoDB.cursor()
                    # Executa o comando SQL para atualizar o nome do produto
                    cursor.execute(
                        f'UPDATE produto SET nome = "{novo_nome}" WHERE idProduto = {id};')
                    print("Nome alterado.")  # Mensagem de confirmação
                    break  # Sai do loop
                else:
                    # Mensagem se a exclusão for cancelada
                    print("Exclusão cancelada.")
                    break  # Sai do loop
        except:
            os.system('cls')  # Limpa a tela
            # Mensagem se o produto não for encontrado
            print("Produto não encontrado.")

# Função para alterar a descrição de um produto


def alterar_descricao():
    header()  # Limpa a tela e imprime o cabeçalho
    while True:
        try:
            nome = input(
                "Digite o nome do produto para alterar sua descrição: ")
            # Obtém informações do produto pelo nome
            produto = get_produto(nome)
            # Imprime informações do produto
            print(
                f"ID: {produto[0]} - NOME: {produto[1]} - DESCRIÇÃO ATUAL: {produto[2]}")
            # Solicita a nova descrição do produto
            nova_descricao = input("Insira a nova descrição do produto: ")
            if nova_descricao == produto[2]:
                # Mensagem se a nova descrição for igual à anterior
                print("A descrição atualizada é a mesma da anterior.")
            else:
                # Solicita confirmação para a alteração
                confirm = input(
                    "Tem certeza que deseja alterar? (Digite 's' para confirmar) \n")
                if confirm == 's':
                    cursor = conexaoDB.cursor()
                    # Executa o comando SQL para atualizar a descrição do produto
                    cursor.execute(
                        f'UPDATE produto SET descricao = "{nova_descricao}" WHERE nome = "{nome}";')
                    print("Descrição alterada.")  # Mensagem de confirmação
                    break  # Sai do loop
                else:
                    # Mensagem se a exclusão for cancelada
                    print("Exclusão cancelada.")
                    break  # Sai do loop
        except:
            os.system('cls')  # Limpa a tela
            # Mensagem se o produto não for encontrado
            print("Produto não encontrado.")

# Função para excluir um produto do banco de dados


def excluir_produto():
    header()  # Limpa a tela e imprime o cabeçalho
    while True:
        try:
            nome = input("Digite o nome do produto a ser excluído: ")
            # Obtém informações do produto pelo nome
            produto = get_produto(nome)
            # Imprime informações do produto
            print(f"ID: {produto[0]} - NOME: {produto[1]}")
            confirm = input(
                "Tem certeza que deseja excluir? (Digite 's' para confirmar) \n")  # Solicita confirmação para exclusão
            if confirm == 's':
                cursor = conexaoDB.cursor()
                # Executa o comando SQL para excluir o produto do banco de dados
                comandoSQL = cursor.execute(
                    f'DELETE FROM produto WHERE nome = "{nome}";')
                print("Produto excluído.")  # Mensagem de confirmação
                cursor.execute(comandoSQL)  # Executa o comando SQL
                conexaoDB.commit()  # Confirma a transação no banco de dados
                break  # Sai do loop
            else:
                print("Exclusão cancelada.")  # Mensagem de cancelamento
                break  # Sai do loop
        except:
            os.system('cls')  # Limpa a tela
            print("Produto não encontrado.")  # Mensagem de erro

# Função para listar todos os produtos cadastrados no banco de dados


def listar_produtos():
    header()  # Limpa a tela e imprime o cabeçalho
    try:
        cursor = conexaoDB.cursor()
        # Executa o comando SQL para selecionar todos os produtos
        cursor.execute('SELECT * FROM produto')
        resultados = cursor.fetchall()  # Obtém todos os resultados da consulta
        if not resultados:
            # Mensagem se não houver produtos cadastrados
            print("Nenhum produto cadastrado ainda.")
        else:
            for produto in resultados:
                # Imprime informações de cada produto
                print(
                    f"ID: {produto[0]} - NOME: {produto[1]} - DESCRIÇÃO: {produto[2]} - PREÇO: R$ {produto[3]} - QUANTIDADE: {produto[4]}")
                print("- " * 50)  # Linha divisória entre os produtos
    except:
        # Mensagem de erro se ocorrer algum problema durante a listagem dos produtos
        print("Erro.")

# Função para visualizar informações de um produto específico


def ver_produto():
    try:
        header()  # Limpa a tela e imprime o cabeçalho
        nome = input("Digite o nome do produto para analisá-lo: ")
        cursor = conexaoDB.cursor()
        # Executa o comando SQL para selecionar o produto pelo nome
        cursor.execute(f'SELECT * FROM produto WHERE nome = "{nome}"')
        resultados = cursor.fetchall()  # Obtém todos os resultados da consulta
        for produto in resultados:
            # Imprime informações do produto
            print(
                f"ID: {produto[0]} - NOME: {produto[1]} - DESCRIÇÃO: {produto[2]} - PREÇO: R$ {produto[3]} - QUANTIDADE: {produto[4]}")
            print("- " * 50)  # Linha divisória
    except mysql.connector.Error as erro:
        # Mensagem se o produto não for encontrado
        print("Produto não encontrado.")
        # Mensagem de erro se ocorrer algum problema durante a exclusão
        print(f"Erro: falha na exclusão {erro}")


while True:
    try:
        header()
        opcoes = int(input("Insira o código: \n(1) - Cadastrar produto \n(2) - Alterar quantidade \n(3) - Alterar preço \n(4) - Alterar nome \n(5) - Alterar descrição \n(6) - Excluir produto\n(7) - Listar produtos disponíveis\n(8) - Ver produto individualmente \n(9) - Sair do sistema. \n"))
        if opcoes < 1 or opcoes > 9:
            os.system('cls')
            print("Inválido.")
        elif opcoes == 1:
            cadastrar_produto()
        elif opcoes == 2:
            alterar_quantidade()
        elif opcoes == 3:
            alterar_preco()
        elif opcoes == 4:
            alterar_nome()
        elif opcoes == 5:
            alterar_descricao()
        elif opcoes == 6:
            excluir_produto()
        elif opcoes == 7:
            listar_produtos()
        elif opcoes == 8:
            ver_produto()
        elif opcoes == 9:
            print("Saindo do sistema.")
            break
        else:
            print("Código inválido.")
    except ValueError:
        print("Digite apenas números.")

    os.system('pause')
    os.system('cls')