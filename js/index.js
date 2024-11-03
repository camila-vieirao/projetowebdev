document.addEventListener("DOMContentLoaded", function() {
    const curiosities = [
        {
            img: 'img/adoptme.png',
            title: 'Você sabe as vantagens de adotar um gatinho?',
            text1: 'Dar um lar para um gatinho é mais do que oferecer abrigo; é transformar uma vida e a sua também. Ao adotar você salva vidas, ganha um amigo fiel, e ainda apoia a nossa ONG, permitindo que mais animais sejam resgatados e cuidados.',
            text2: 'Faça a diferença! Adote um gatinho e ganhe um amigo para a vida toda!'
        },
        {
            img: 'img/esporotricose.png',
            title: 'O que é esporotricose?',
            text1: 'A esporotricose é uma infecção causada por fungos do gênero *Sporothrix*, que pode afetar animais e humanos. Em gatos, manifesta-se por lesões na pele e pode ser transmitida através de arranhões ou mordidas.',
            text2: 'A prevenção inclui evitar que gatos tenham acesso à rua e buscar tratamento imediato se houver suspeita.'
        },
        {
            img: 'img/pqvacinar.png',
            title: 'A importância das vacinas',
            text1: 'A vacinação é essencial para a saúde dos gatos, protegendo-os contra doenças graves como panleucopenia, rinotraqueíte e calicivirose.',
            text2: 'Mantenha as vacinas do seu gato em dia e garanta uma vida longa e saudável para ele. Informe-se sobre o calendário vacinal recomendado.'
        }
        
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById('curiosidade-img');
    const titleElement = document.getElementById('curiosidade-title');
    const text1Element = document.getElementById('curiosidade-text1');
    const text2Element = document.getElementById('curiosidade-text2');

    function updateCuriosidade() {
        
        imgElement.classList.add('fade-out');
        titleElement.classList.add('fade-out');
        text1Element.classList.add('fade-out');
        text2Element.classList.add('fade-out');
    
        setTimeout(() => {
            const curiosity = curiosities[currentIndex];
            imgElement.src = curiosity.img;
            titleElement.textContent = curiosity.title;
            text1Element.textContent = curiosity.text1;
            text2Element.textContent = curiosity.text2;
    
            
            imgElement.classList.remove('fade-out');
            titleElement.classList.remove('fade-out');
            text1Element.classList.remove('fade-out');
            text2Element.classList.remove('fade-out');
    
            currentIndex = (currentIndex + 1) % curiosities.length;
        }, 500); 
    }

    updateCuriosidade();

    setInterval(updateCuriosidade, 5000);

    const catsForAdoption = [
        {
            img: 'img/nana.png',
            title: 'Nana',
            text1: 'Nana é uma gatinha carinhosa que adora brincar. Está esperando por um lar amoroso.',
            text2: 'Entre em contato para saber mais sobre a Nana.',
            instagramUrl: 'https://www.instagram.com/p/link_para_o_post_da_nana/'
        },
        {
            img: 'img/garfield.png',
            title: 'garfield',
            text1: 'Bob é um gato tranquilo que gosta de um bom colo. Ele está pronto para encontrar uma família.',
            text2: 'Conheça o Bob e apaixone-se!',
            instagramUrl: 'https://www.instagram.com/p/link_para_o_post_do_bob/'
        }
        // Adicione mais gatos conforme necessário
    ];

    let currentCatIndex = 0;

    const adoteImgElement = document.getElementById('adote-img');
    const adoteTitleElement = document.getElementById('adote-title');
    const adoteText1Element = document.getElementById('adote-text1');
    const adoteText2Element = document.getElementById('adote-text2');
    const adoteBtnElement = document.getElementById('adote-btn');

    function updateAdoteSection() {
        const cat = catsForAdoption[currentCatIndex];
        adoteImgElement.src = cat.img;
        adoteTitleElement.textContent = cat.title;
        adoteText1Element.textContent = cat.text1;
        adoteText2Element.textContent = cat.text2;
        adoteBtnElement.href = cat.instagramUrl;

        currentCatIndex = (currentCatIndex + 1) % catsForAdoption.length;
    }

    // Atualiza inicialmente
    updateAdoteSection();

    // Muda a cada 5 segundos
    setInterval(updateAdoteSection, 5000);
});
