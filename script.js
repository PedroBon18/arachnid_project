// Função para formatar a data (Ex: "Nova York, 12 de Maio, 2024")
function atualizarData() {
    const dataHoje = new Date();
    
    const opcoes = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };

    const isEnglish = document.querySelector('a[href="en.html"].active');
    
    let local = 'pt-BR';
    let cidade = 'Nova Iorque';
    
    if (isEnglish) {
        local = 'en-US';
        cidade = 'New York';
    }

    const dataFormatada = dataHoje.toLocaleDateString(local, opcoes);
    
    // Procura o elemento da data no HTML
    const elementoData = document.querySelector('.meta-dados span:first-child');
    
    // Se achou, atualiza o texto
    if (elementoData) {
        elementoData.innerText = `${cidade}, ${dataFormatada}`;
    }
}

// Executa a função assim que o site carrega
atualizarData();


// Procura a barra onde está escrito o nome do editor
const editorBar = document.querySelector('.editor-bar');

if (editorBar) {
    // Muda o cursor para indicar que é clicável
    editorBar.style.cursor = 'pointer';
    editorBar.title = "Clique por sua conta e risco";

    const audioRisada = new Audio('audio/Meme - J.J Jameson rindo (Homem - Aranha).mp3');

    editorBar.addEventListener('click', function() {
        
        // Toca a Risada iconica do J.JONAH JAMESON
        audioRisada.currentTime = 0; // Reinicia a risada se já estiver tocando
        audioRisada.play().catch(erro => {
            console.log("Erro ao tocar áudio:", erro);
            alert("O arquivo 'audio/Meme - J.J Jameson rindo (Homem - Aranha).mp3' não foi encontrado! Baixe a risada e coloque na pasta img.");
        });

        //Efeito visual: A tela treme enquanto ele ri
        let tremedeira = setInterval(() => {
            const x = Math.random() * 4 - 2; 
            const y = Math.random() * 4 - 2;
            document.body.style.transform = `translate(${x}px, ${y}px)`;
        }, 50);

        // Para a tremedeira depois de 8 segundos tempo exato da risada
        setTimeout(() => {
            clearInterval(tremedeira);
            document.body.style.transform = "none";
        }, 8000);
    });

    const avatarCriador = document.getElementById('avatar-criador');

    if (avatarCriador) {
       
        const audioSpidey = new Audio('audio/Spetacular_Spider_Man.mp3');
        
        // Ajusta o volume para não estourar o ouvido (RECOMENDADO!)
        audioSpidey.volume = 0.6; 

        avatarCriador.addEventListener('click', function() {
            
            audioSpidey.currentTime = 0;
            audioSpidey.play().catch(e => {
                alert("Ei, Dev! Não esqueça de colocar o arquivo 'spectacular.mp3' na pasta 'audio'!");
                console.warn(e);
            });

            // Efeito Visual: Giro Espetacular + Zoom
            avatarCriador.style.transition = "transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)"; 
            avatarCriador.style.transform = "scale(1.2) rotate(360deg)";
            avatarCriador.style.filter = "grayscale(0%) contrast(120%)";

            // Volta ao normal depois que o efeito visual acaba
            setTimeout(() => {
                avatarCriador.style.transform = "scale(1) rotate(0deg)";
                avatarCriador.style.filter = "grayscale(100%)";
            }, 1000);
        });
    }
}

console.log("Olá, Amigão da Vizinhança! Se você está lendo isso, você é um Dev curioso.");
console.log("Com grandes poderes vêm grandes responsabilidades.")
console.log("Hello, Neighbor Friend! If you're reading this, you're a curious Dev.");
console.log("Com grandes poderes vêm grandes responsabilidades.")
console.log("With great power comes great responsibility.")
