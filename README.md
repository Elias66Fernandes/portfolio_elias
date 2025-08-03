# Portfólio Elias Fernandes

Portfólio web responsivo desenvolvido com Flask e JavaScript, focado nas áreas de Cybersegurança, Inteligência Artificial e Análise de Dados.

## 🚀 Características

- **Design Moderno**: Interface escura com elementos visuais que remetem à tecnologia
- **Responsivo**: Adaptável a diferentes tamanhos de tela (desktop, tablet, mobile)
- **Interativo**: Animações suaves e efeitos visuais
- **Funcional**: Modais de projetos, formulário de contato e navegação fluida

## 🛠️ Tecnologias Utilizadas

### Backend
- **Flask**: Framework web Python
- **Flask-CORS**: Habilitação de CORS para integração frontend/backend

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com gradientes e animações
- **JavaScript**: Funcionalidades dinâmicas e interatividade
- **Bootstrap 5**: Framework CSS para responsividade
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Poppins)

## 📁 Estrutura do Projeto

```
portfolio_elias/
├── src/
│   ├── static/
│   │   ├── index.html      # Página principal
│   │   ├── styles.css      # Estilos CSS
│   │   └── script.js       # JavaScript
│   └── main.py             # Aplicação Flask
├── venv/                   # Ambiente virtual Python
├── requirements.txt        # Dependências Python
└── README.md              # Documentação
```

## 🎨 Seções do Portfólio

### 1. **Hero Section**
- Apresentação pessoal com animações de partículas
- Ícones tecnológicos flutuantes
- Botões de call-to-action

### 2. **Sobre Mim**
- Formação acadêmica
- Experiência docente
- Hard skills organizadas por categoria
- Soft skills com ícones

### 3. **Projetos**
- 6 projetos principais com modais detalhados:
  - Detecção de Fissuras com YOLO
  - SmartWeather IoT
  - Análise de Evasão Escolar
  - Gestão Condominial
  - Dataset Termolatência Asfáltica
  - BD Clínica Médica

### 4. **Certificações**
- Cursos organizados por área:
  - Cybersegurança
  - Banco de Dados
  - Programação
  - Indústria 4.0
  - Qualidade
  - Eventos & Congressos

### 5. **Contato**
- Informações de contato
- Formulário funcional
- Links para redes sociais

## 🚀 Como Executar

### Pré-requisitos
- Python 3.7+
- pip

### Instalação

1. **Clone ou extraia o projeto**
```bash
cd portfolio_elias
```

2. **Ative o ambiente virtual**
```bash
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate     # Windows
```

3. **Instale as dependências**
```bash
pip install -r requirements.txt
```

4. **Execute a aplicação**
```bash
python src/main.py
```

5. **Acesse no navegador**
```
http://localhost:5000
```

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `styles.css`:
- **Primária**: `#00d4ff` (Ciano)
- **Secundária**: `#7b2cbf` (Roxo)
- **Fundo**: `#0a0a0a` (Preto)

### Conteúdo
Para personalizar o conteúdo:
1. **Dados pessoais**: Edite o arquivo `index.html`
2. **Projetos**: Modifique o objeto `projectsData` em `script.js`
3. **Estilos**: Ajuste as variáveis CSS em `styles.css`

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints para:
- **Desktop**: > 992px
- **Tablet**: 768px - 991px
- **Mobile**: < 768px

## ✨ Funcionalidades JavaScript

- **Smooth Scrolling**: Navegação suave entre seções
- **Modais de Projetos**: Detalhes expandidos dos projetos
- **Formulário de Contato**: Validação e feedback visual
- **Animações de Scroll**: Elementos aparecem conforme o scroll
- **Efeitos de Hover**: Interações visuais nos elementos
- **Botão Scroll to Top**: Retorno rápido ao topo

## 🔧 Manutenção

### Adicionando Novos Projetos
1. Adicione os dados no objeto `projectsData` em `script.js`
2. Crie um novo card na seção de projetos em `index.html`
3. Ajuste o CSS se necessário

### Atualizando Informações
- **Contato**: Edite a seção de contato em `index.html`
- **Habilidades**: Modifique as listas de skills
- **Certificações**: Atualize a lista de cursos