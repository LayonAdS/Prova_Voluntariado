# Plataforma Solodária

A **Platarforma Solidária** é uma aplicação web que conecta pessoas a Organização Não Gorvernamentais (ONGs), permitindo o cadastro de necessidaes, visualização de demandas e ações voluntarias. Seu objetivo é facilitar o engajamento social e a solidariedade, aproximando cidadãos de causas importantes.

## Funcionalidades

- Páginas inicial com explicações sobre o projeto e como ajudar.
- Cadastro de necessidades de instituições (ONGs).
- Visualização filtrada das necessidades cadastradas.
- Validação de formulário com preenchimento automático de endereço via API do ViaCEP.
- Armazenamento local (`localStorage`) das necessidades.
- Estilização moderna e acessível.

## Estrutura de Arquivos 

```
/
├── index.html               # Página inicial com informações sobre a plataforma
├── cadastro.html            # Formulário para cadastrar novas necessidades
├── visualizacao.html        # Página para listar e filtrar as necessidades cadastradas
├── style.css                # Estilos para todas as páginas
└── script.js                # Script JS com lógica de cadastro, busca e integração com ViaCEP
```

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- API ViaCEP (para consulta de endereço via CEP)
- Armazenamento com `localStorage`

## Como Utilizar

1. **Abrir o projeto em um navegador moderno.**
2. Acesse `index.html` para ler sobre a proposta.
3. Use `cadastro.html` para registrar uma nova necessidade.
4. Vá até `visualizacao.html` para pesquisar ou filtrar por tipo.
5. Os dados ficarão armazenados localmente no navegador.

## Destaques do Código

- **Formulário Validado:** Todos os campos obrigatórios têm validação nativa.
- **API CEP:** Busca automática de endereço ao digitar o CEP.
- **Renderização Dinâmica:** Os cards das necessidades são renderizados com base nos dados salvos.
- **Filtro Inteligente:** É possível buscar por palavras-chave e tipo de ajuda.

## Como Ajudar

Você pode contribuir com:

- Tempo e voluntariado;
- Doações materiais ou financeiras;
- Compartilhamento da plataforma com amigos;
- Sugestões de novas funcionalidades.

## Requisitos

- Navegador atualizado (Chrome, Firefox, Edge, etc.)
- (Opcional) Servidor local (Live Server no VSCode) para melhor experiência.
