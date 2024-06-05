$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //criou uma função com o .val//
        //console.log(enderecoDaNovaImagem); //para testar criamos um console.log//
        const novoItem = $('<li style="display: none"></li>'); 
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); //appentTo é para adicionar o novo elemento no(novoItem) no JQuery. Ele pega $(`<img src="${enderecoDaNovaImagem}" />`) e insere dentro do <li></li>// Vamos fazer a mesma coisa em ver imagem em tamanho real
        $(`
        <div class= "overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); //efeito de fadeIn, entre parenteses é o tempo (ta um segundos)
        $('#endereco-imagem-nova').val('');
    })
})
