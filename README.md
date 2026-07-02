# Site v2 — cartão de visita + área do aluno

## Nova estrutura

| Página | Função |
|---|---|
| `index.html` | **Cartão de visita/portfólio**: bio, atuação (Docência, LabIF Maker, LCAA, NUPEM), interesses, frase do dia e contatos (telefone, campus, Lattes, ORCID, redes @ricdon). |
| `ifsp.html` | **Área do aluno**: tabelas de materiais por disciplina + utilitários (SIMET, CAD, Pecha Kucha). |
| `dados/materiais.js` | **A "tabela editável"** — único arquivo que você precisa tocar para gerenciar materiais. |
| `medidor.html`, `pechakucha.html` | Utilitários, mantidos com navegação atualizada. |

O layout/design é exatamente o mesmo da versão anterior — só mudou o conteúdo
e a organização.

## ⚠️ Uma pendência sua

No `index.html`, procure pelo comentário `TROQUE o endereço abaixo pelo link
do seu Lattes` e cole a URL do seu currículo
(formato `http://lattes.cnpq.br/XXXXXXXXXXXXXXXX`). O ORCID já está correto
(0000-0002-8231-8738, confirmado no seu about.me).

## Como cadastrar um material novo (o fluxo do dia a dia)

1. No GitHub, faça upload do arquivo para a pasta `PDF/` (botão
   **Add file → Upload files**).
2. Abra `dados/materiais.js` e clique no lápis ✏️ para editar.
3. Copie um bloco existente e ajuste:

   ```js
   {
     disciplina: "BD1 — Banco de Dados I",
     descricao: "Slides da aula 3 — Modelo relacional.",
     link: "PDF/bd1-aula3.zip"
   },
   ```

4. **Commit changes**. Em 1–2 minutos a tabela aparece no site, agrupada
   pela disciplina automaticamente. Materiais com a mesma `disciplina`
   caem na mesma tabela; links `https://...` abrem em nova aba com botão
   "Abrir".

## Como publicar esta atualização

1. Copie os arquivos deste pacote para a raiz do repositório, substituindo
   os antigos e adicionando `ifsp.html` e a pasta `dados/`.
2. **Apague do repositório**: `vtpiihd.html` e `disciplina-template.html`
   (não são mais usados — os materiais deles já estão em `dados/materiais.js`).
3. **NÃO apague**: `CNAME`, `imagens/`, `PDF/`, `abnt/`.
4. Commit e push. Ctrl+F5 no navegador para limpar o cache.

## Observação

Aproveitei os zips `AulaEdicao.zip` e `HelloWorld.zip` que estavam na pasta
PDF/ sem link em lugar nenhum e já cadastrei em "Uso geral" — se não quiser
exibi-los, é só apagar os blocos correspondentes no `materiais.js`.
