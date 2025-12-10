import express from "express";

const host = "0.0.0.0";
const porta = 3000;

const server = express();

server.get("/", (req, res) => {
    res.send(`
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<title>Campeonato de LoL</title>

<style>
    body {
        margin: 0;
        padding: 0;
        background: url("https://static.lolwallpapers.net/2017/08/59876c364205d-1024x576.jpg") no-repeat center center fixed;
        background-size: cover;
        color: #d7d7d7;
        font-family: 'Segoe UI', sans-serif;
    }

    h1 {
        text-align: center;
        color: #e2c675;
        margin-top: 30px;
        font-size: 36px;
        letter-spacing: 2px;
        text-shadow: 0px 0px 12px #000;
    }

    .botao-principal {
        display: block;
        width: 320px;
        margin: 25px auto;
        padding: 14px;
        border-radius: 8px;
        font-size: 20px;
        border: 2px solid #1e90ff;
        background: rgba(10, 25, 50, 0.8);
        color: #78c7ff;
        font-weight: bold;
        cursor: pointer;
        transition: 0.25s;
        box-shadow: 0px 0px 12px rgba(0, 153, 255, 0.3);
    }

    .botao-principal:hover {
        background: rgba(20, 40, 70, 0.9);
        transform: scale(1.03);
        box-shadow: 0px 0px 16px rgba(0, 153, 255, 0.6);
    }

    .darcerto-bg {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.85);
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(3px);
    }

    .darcerto-box {
        width: 450px;
        background: linear-gradient(180deg, #0b1222, #05070e);
        border: 2px solid #1e90ff;
        border-radius: 12px;
        padding: 22px;
        box-shadow: 0 0 25px rgba(0,153,255,0.4);
        animation: fadeIn 0.3s ease;
    }

    .darcerto-title {
        text-align: center;
        color: #e2c675;
        font-size: 22px;
        margin-bottom: 15px;
        text-shadow: 0px 0px 6px #000;
    }

    label {
        display: block;
        margin-top: 10px;
        color: #9acfff;
        font-size: 15px;
    }

    input, select {
        width: 100%;
        padding: 11px;
        margin-top: 5px;
        border-radius: 6px;
        border: 1px solid #1e90ff;
        background: rgba(5, 10, 20, 0.9);
        color: white;
        outline: none;
        transition: 0.2s;
    }

    input:focus, select:focus {
        box-shadow: 0px 0px 10px #1e90ff;
        transform: scale(1.02);
    }

    .darcerto-btns {
        display: flex;
        justify-content: space-between;
        margin-top: 18px;
    }

    .btn {
        padding: 12px 18px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
        border: none;
        transition: 0.25s;
    }

    .btn-save {
        background: #1e90ff;
        color: black;
        box-shadow: 0px 0px 8px rgba(30,144,255,0.6);
    }

    .btn-save:hover {
        background: #4aa8ff;
        transform: scale(1.05);
    }

    .btn-cancel {
        background: #222;
        color: #ccc;
    }

    .btn-cancel:hover {
        background: #333;
        transform: scale(1.05);
    }

    .btn-delete {
        background: #8b0000;
        color: #eee;
        margin-top: 8px;
        padding: 8px 14px;
        border-radius: 6px;
        cursor: pointer;
        border: none;
        transition: 0.25s;
    }

    .btn-delete:hover {
        background: #b30000;
        transform: scale(1.05);
    }

    .list-area {
        max-width: 800px;
        margin: 30px auto;
        padding: 18px;
        border: 2px solid #1e90ff;
        border-radius: 10px;
        background: rgba(8, 15, 30, 0.8);
        box-shadow: 0px 0px 12px rgba(30,144,255,0.3);
    }

    .section-title {
        font-size: 22px;
        color: #e2c675;
        margin-bottom: 12px;
        border-bottom: 1px solid #444;
        padding-bottom: 6px;
    }

    .item {
        background: rgba(2, 7, 16, 0.8);
        padding: 12px;
        border-left: 4px solid #1e90ff;
        margin-bottom: 12px;
        border-radius: 6px;
        color: #c8c8c8;
        transition: 0.25s;
    }

    .item:hover {
        transform: scale(1.02);
        background: rgba(12, 18, 32, 0.9);
    }

</style>
</head>
<body>

<h1>Campeonato de League of Legends</h1>

<button class="botao-principal" onclick="abrirpersonagem('modalJogador')">Cadastrar Jogador</button>
<button class="botao-principal" onclick="abrirpersonagem('modalEquipe')">Cadastrar Equipe</button>

<!-- Modal Jogador -->
<div class="darcerto-bg" id="modalJogador">
    <div class="darcerto-box">
        <div class="darcerto-title">Cadastrar Jogador</div>

        <label>Nome</label>
        <input id="nomeJogador" type="text">

        <label>Nickname</label>
        <input id="nickJogador" type="text">

        <label>Função</label>
        <select id="funcaoJogador">
            <option>Top</option>
            <option>Jungle</option>
            <option>Mid</option>
            <option>ADC</option>
            <option>Suporte</option>
        </select>

        <label>Elo</label>
        <input id="eloJogador" type="text">

        <label>Gênero</label>
        <select id="generoJogador">
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outro</option>
        </select>

        <label>Equipe</label>
        <select id="equipeJogador">
            <option value="">Selecione uma equipe</option>
        </select>

        <div class="darcerto-btns">
            <button class="btn btn-cancel" onclick="fecharpersonagem('modalJogador')">Cancelar</button>
            <button class="btn btn-save" onclick="salvarJogador()">Salvar</button>
        </div>
    </div>
</div>

<!-- Modal Equipe -->
<div class="darcerto-bg" id="modalEquipe">
    <div class="darcerto-box">
        <div class="darcerto-title">Cadastrar Equipe</div>

        <label>Nome da Equipe</label>
        <input id="nomeEquipe" type="text">

        <label>Nome do Capitão</label>
        <input id="capitaoEquipe" type="text">

        <label>Telefone</label>
        <input id="telefoneEquipe" type="text">

        <div class="darcerto-btns">
            <button class="btn btn-cancel" onclick="fecharpersonagem('modalEquipe')">Cancelar</button>
            <button class="btn btn-save" onclick="salvarEquipe()">Salvar</button>
        </div>
    </div>
</div>

<!-- Listas -->
<div class="list-area">
    <div class="section-title">Jogadores Cadastrados</div>
    <div id="listaJogadores"></div>
</div>

<div class="list-area">
    <div class="section-title">Equipes Cadastradas</div>
    <div id="listaEquipes"></div>
</div>

<script>
function abrirpersonagem(id) {
    if (id === "modalJogador") {
        carregarEquipesNoSelect();
    }
    document.getElementById(id).style.display = "flex";
}

function fecharpersonagem(id) {
    document.getElementById(id).style.display = "none";
}

const jogadores = [];
const equipes = [];

function carregarEquipesNoSelect() {
    const select = document.getElementById("equipeJogador");
    select.innerHTML = "<option value=''>Selecione uma equipe</option>";

    if (equipes.length === 0) {
        select.innerHTML = "<option value=''>Nenhuma equipe cadastrada</option>";
        return;
    }

    equipes.forEach(eq => {
        const op = document.createElement("option");
        op.value = eq.nome;
        op.textContent = eq.nome;
        select.appendChild(op);
    });
}

function salvarJogador() {
    const nome = document.getElementById("nomeJogador").value.trim();
    const nick = document.getElementById("nickJogador").value.trim();
    const funcao = document.getElementById("funcaoJogador").value;
    const elo = document.getElementById("eloJogador").value.trim();
    const genero = document.getElementById("generoJogador").value;
    const equipe = document.getElementById("equipeJogador").value;

    if (!nome || !nick || !elo || !equipe) {
        alert("Preencha todos os campos!");
        return;
    }

    jogadores.push({ nome, nick, funcao, elo, genero, equipe });
    atualizarListaJogadores();
    fecharpersonagem("modalJogador");
}

function atualizarListaJogadores() {
    const lista = document.getElementById("listaJogadores");
    lista.innerHTML = "";

    jogadores.forEach((j, index) => {
        lista.innerHTML += \`
        <div class="item">
            <b>\${j.nick}</b> — \${j.funcao}<br>
            Elo: \${j.elo}<br>
            Gênero: \${j.genero}<br>
            Equipe: \${j.equipe}<br><br>
            <button class="btn-delete" onclick="excluirJogador(\${index})">Excluir</button>
        </div>
        \`;
    });
}

function excluirJogador(i) {
    jogadores.splice(i, 1);
    atualizarListaJogadores();
}

function salvarEquipe() {
    const nome = document.getElementById("nomeEquipe").value.trim();
    const capitao = document.getElementById("capitaoEquipe").value.trim();
    const telefone = document.getElementById("telefoneEquipe").value.trim();

    if (!nome || !capitao || !telefone) {
        alert("Preencha todos os campos!");
        return;
    }

    equipes.push({ nome, capitao, telefone });
    atualizarListaEquipes();
    fecharpersonagem("modalEquipe");
}

function atualizarListaEquipes() {
    const lista = document.getElementById("listaEquipes");
    lista.innerHTML = "";

    equipes.forEach((e, index) => {
        lista.innerHTML += \`
        <div class="item">
            <b>\${e.nome}</b><br>
            Capitão: \${e.capitao}<br>
            Telefone: \${e.telefone}<br><br>
            <button class="btn-delete" onclick="excluirEquipe(\${index})">Excluir</button>
        </div>
        \`;
    });
}

function excluirEquipe(i) {
    equipes.splice(i, 1);
    atualizarListaEquipes();
}
</script>

</body>
</html>
`);
});

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://\${host}:\${porta}`);
});
