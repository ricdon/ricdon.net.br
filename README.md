# 🌐 Site de Disciplinas -- IFSP Votuporanga

**Prof. Dr. Ricardo César de Carvalho**

Este repositório contém o código-fonte do site utilizado para organizar
materiais das disciplinas, utilitários e páginas de apoio para os
estudantes do **IFSP -- Campus Votuporanga**.

O site é hospedado automaticamente pelo **GitHub Pages**, não necessita
servidor próprio e pode ser acessado diretamente pelo navegador.

------------------------------------------------------------------------

## 📁 Estrutura do Repositório

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

------------------------------------------------------------------------

## 🚀 Como funciona o site

-   Construído em **HTML5 + Bootstrap 5** (carregado via CDN).
-   Totalmente **responsivo** e compatível com dispositivos móveis.
-   Todas as páginas seguem o mesmo padrão visual:
    -   Cabeçalho com menu
    -   Seções organizadas
    -   Rodapé institucional
    -   Paleta de cores do IFSP
-   Não depende de backend --- é **100% estático**, ideal para GitHub
    Pages.

------------------------------------------------------------------------

## 🖥️ Publicação no GitHub Pages

1.  Vá para **Settings \> Pages**
2.  Em "Source", selecione:
    -   **Deploy from branch**
3.  Em "Branch", selecione:
    -   **main**
    -   **/(root)**

Seu site estará disponível em:

    https://SEU_USUARIO.github.io/

------------------------------------------------------------------------

## 📚 Criando uma nova página de disciplina

1.  Copie o arquivo:

```{=html}
<!-- -->
```
    disciplina-template.htm

2.  Renomeie usando o código da disciplina:

```{=html}
<!-- -->
```
    bd1.htm
    redes1.htm
    algoritmos.htm

3.  Substitua os marcadores internos:

-   `[Nome da Disciplina]`
-   `[CÓDIGO]`
-   `[Ano/Semestre]`
-   `[Breve descrição...]`
-   `[Materiais da disciplina]`
-   `[Avaliações]`

4.  Adicione a disciplina no `index.html`.

------------------------------------------------------------------------

## ✨ Mantendo o padrão visual do site

-   Utilize sempre o arquivo `disciplina-template.htm`.
-   Evite HTML antigo:
    -   `<font>`, `<center>`, `<table>` para layout.
-   Use componentes do Bootstrap:
    -   `container`, `row`, `col`
    -   `card`, `btn`, `list-group`
    -   `table`, `alert`, `navbar`

------------------------------------------------------------------------

## 🛠️ Editando o site

Recomendado usar:

-   VS Code
-   Sublime Text
-   Notepad++
-   ChatGPT 😄 (para gerar partes mais complexas)

Após editar, faça commit/push normalmente.

------------------------------------------------------------------------

## 🧪 Testando localmente

1.  Clone o repositório:

```{=html}
<!-- -->
```
    git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

2.  Abra `index.html` no navegador.

------------------------------------------------------------------------

## 🤝 Para outros docentes

Qualquer professor pode reutilizar este modelo:

1.  Faça um Fork ou baixe o ZIP\
2.  Atualize informações pessoais\
3.  Adicione suas disciplinas\
4.  Publique via GitHub Pages

------------------------------------------------------------------------

## 📬 Contato

**Prof. Dr. Ricardo César de Carvalho**\
Página pessoal: https://about.me/ricdon\
IFSP -- Campus Votuporanga

------------------------------------------------------------------------
