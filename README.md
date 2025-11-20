🌐 Site de Disciplinas – IFSP Votuporanga

Prof. Dr. Ricardo César de Carvalho

Este repositório contém o código-fonte do site utilizado para organizar materiais das disciplinas, utilitários e páginas de apoio para os estudantes do IFSP – Campus Votuporanga.

O site é hospedado automaticamente pelo GitHub Pages, não necessita servidor próprio e pode ser acessado diretamente pelo navegador.

📁 Estrutura do Repositório
/
├── index.html                 # Página inicial do site
├── disciplina-template.htm    # Modelo para criação de novas disciplinas
├── vtpiihd.htm                # Disciplina: Introdução à Informática e Hardware
├── medidor.htm                # Página do SIMET (medidor de internet)
├── pechakucha.htm             # Página sobre o formato Pecha Kucha
│
├── imagens/                   # Logos, fotos e ilustrações
│   ├── logo_ifsp.jpg
│   ├── IMG_4350.jpg
│   ├── lovepc.gif
│   └── win10.gif
│
└── PDF/                       # Arquivos, templates e materiais de apoio

🚀 Como funciona o site

Construído em HTML5 + Bootstrap 5 (carregado via CDN).

Totalmente responsivo e compatível com dispositivos móveis.

Todas as páginas seguem o mesmo padrão visual:

Cabeçalho com menu

Seções organizadas

Rodapé institucional

Paleta de cores do IFSP

Não depende de backend — é 100% estático, ideal para GitHub Pages.

🖥️ Publicação no GitHub Pages

O GitHub Pages publica automaticamente qualquer arquivo HTML na raiz do repositório.

Para ativar:

Vá para Settings > Pages

Em "Source", selecione:

Deploy from branch

Em "Branch", selecione:

main

/(root)

Seu site estará disponível em:

https://SEU_USUARIO.github.io/

📚 Criando uma nova página de disciplina

Copie o arquivo:

disciplina-template.htm


Renomeie usando o código da disciplina:

bd1.htm
redes1.htm
algoritmos.htm


Abra o arquivo e substitua os marcadores:

[Nome da Disciplina]

[CÓDIGO]

[Ano/Semestre]

[Breve descrição...]

[Materiais da disciplina]

[Avaliações]

No index.html, adicione um card ou link apontando para a nova disciplina.

Pronto!
A disciplina estará integrada ao site com o mesmo visual moderno.

✨ Mantendo o padrão visual do site

Para que tudo continue organizado:

Use sempre o modelo disciplina-template.htm.

Evite HTML ultrapassado:

❌ <font>

❌ <center>

❌ tabelas para layout

Utilize os componentes do Bootstrap:

✔ container, row, col

✔ card, btn, list-group

✔ table, alert, navbar

🛠️ Editando o site

Qualquer editor funciona:

Visual Studio Code

Sublime Text

Notepad++

ChatGPT 😄 (gerar trechos ou atualizar páginas)

Após editar, basta fazer commit e push.

🧪 Testando localmente

Clone o repositório:

git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git


Abra o arquivo index.html no navegador.

Verifique:

Links internos

Imagens

Navegação

Responsividade

🤝 Para outros docentes

Este template pode ser reutilizado por qualquer professor do IFSP.
Para isso:

Faça um Fork ou baixe o ZIP.

Altere as informações pessoais.

Substitua as páginas das disciplinas.

Publique com GitHub Pages.

📬 Contato

Dúvidas, sugestões ou melhorias:

Prof. Dr. Ricardo César de Carvalho
Página profissional: https://about.me/ricdon

IFSP – Campus Votuporanga
