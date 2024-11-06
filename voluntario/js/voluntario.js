document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form_voluntario').addEventListener('submit', function(e) {
        e.preventDefault();
        registraVoluntario();
    });

    document.getElementById('curriculo').addEventListener('change', function() {
        var fileName = this.files[0] ? this.files[0].name : 'Nenhum arquivo selecionado';
        document.getElementById('file-name').textContent = fileName;
    });
});


function registraVoluntario() {
    var formData = new FormData(document.getElementById("form_voluntario"));

    fetch('voluntario/php/voluntario.php', {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('form_voluntario').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
