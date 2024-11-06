document.addEventListener("DOMContentLoaded", function() {

    function createCarousel(config) {
        const { dataArray, elements, interval = 5000 } = config;
        let currentIndex = 0;

        function updateContent() {

            if (elements.img) elements.img.classList.add('fade-out');
            if (elements.title) elements.title.classList.add('fade-out');
            if (elements.text1) elements.text1.classList.add('fade-out');
            if (elements.text2) elements.text2.classList.add('fade-out');
            if (elements.button) elements.button.classList.add('fade-out');

            setTimeout(() => {
                const data = dataArray[currentIndex];

                if (elements.img) elements.img.src = data.img_path;
                if (elements.title) elements.title.textContent = data.title;
                if (elements.text1) elements.text1.textContent = data.text1;
                if (elements.text2) elements.text2.textContent = data.text2;
                if (elements.button && data.instagram_url) {
                    elements.button.href = data.instagram_url;
                }

                if (elements.img) elements.img.classList.remove('fade-out');
                if (elements.title) elements.title.classList.remove('fade-out');
                if (elements.text1) elements.text1.classList.remove('fade-out');
                if (elements.text2) elements.text2.classList.remove('fade-out');
                if (elements.button) elements.button.classList.remove('fade-out');

                currentIndex = (currentIndex + 1) % dataArray.length;
            }, 500);
        }

        updateContent();

        setInterval(updateContent, interval);
    }

    function fetchDataAndInitCarousel(url, config) {
        fetch(url)
            .then(response => response.json())
            .then(dataArray => {
                config.dataArray = dataArray;
                createCarousel(config);
            })
            .catch(error => console.error('Erro ao buscar os dados:', error));
    }

    fetchDataAndInitCarousel('index/php/get_curiosidades.php', {
        section: 'curiosidades',
        elements: {
            img: document.getElementById('curiosidade-img'),
            title: document.getElementById('curiosidade-title'),
            text1: document.getElementById('curiosidade-text1'),
            text2: document.getElementById('curiosidade-text2')
        }
    });

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
