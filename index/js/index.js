document.addEventListener("DOMContentLoaded", function() {
    // Função genérica para criar o carrossel
    function createCarousel(config) {
        const { dataArray, elements, interval = 5000 } = config;
        let currentIndex = 0;

        function updateContent() {
            // Adiciona classe de fade-out aos elementos específicos
            if (elements.img) elements.img.classList.add('fade-out');
            if (elements.title) elements.title.classList.add('fade-out');
            if (elements.text1) elements.text1.classList.add('fade-out');
            if (elements.text2) elements.text2.classList.add('fade-out');
            if (elements.button) elements.button.classList.add('fade-out');

            setTimeout(() => {
                const data = dataArray[currentIndex];

                // Atualiza os elementos com os dados do carrossel
                if (elements.img) elements.img.src = data.img_path;
                if (elements.title) elements.title.textContent = data.title;
                if (elements.text1) elements.text1.textContent = data.text1;
                if (elements.text2) elements.text2.textContent = data.text2;
                if (elements.button && data.instagram_url) {
                    elements.button.href = data.instagram_url;
                }

                // Remove a classe de fade-out após atualização
                if (elements.img) elements.img.classList.remove('fade-out');
                if (elements.title) elements.title.classList.remove('fade-out');
                if (elements.text1) elements.text1.classList.remove('fade-out');
                if (elements.text2) elements.text2.classList.remove('fade-out');
                if (elements.button) elements.button.classList.remove('fade-out');

                currentIndex = (currentIndex + 1) % dataArray.length;
            }, 500); // O tempo deve corresponder à duração da transição CSS
        }

        // Atualiza inicialmente
        updateContent();

        // Muda a cada intervalo definido
        setInterval(updateContent, interval);
    }

    // Função para buscar dados de uma URL e inicializar o carrossel
    function fetchDataAndInitCarousel(url, config) {
        fetch(url)
            .then(response => response.json())
            .then(dataArray => {
                config.dataArray = dataArray;
                createCarousel(config);
            })
            .catch(error => console.error('Erro ao buscar os dados:', error));
    }

    // Configuração para o carrossel de Curiosidades
    fetchDataAndInitCarousel('index/php/get_curiosidades.php', {
        section: 'curiosidades',
        elements: {
            img: document.getElementById('curiosidade-img'),
            title: document.getElementById('curiosidade-title'),
            text1: document.getElementById('curiosidade-text1'),
            text2: document.getElementById('curiosidade-text2')
        }
    });

    // Configuração para o carrossel de Adote
    fetchDataAndInitCarousel('index/php/get_adote.php', {
        section: 'adote',
        elements: {
            img: document.getElementById('adote-img'),
            title: document.getElementById('adote-title'),
            text1: document.getElementById('adote-text1'),
            text2: document.getElementById('adote-text2'),
            button: document.getElementById('adote-btn')
        }
    });
});
