$(function(){

    //on ajout un span apres input puis on le cache
    $('.custom_radio input[type=radio]').hide().after('<span class="off"></span>');

    //event de click sur les spans
    $('.off').click(function(){

        //on deselectionne le precedent
        $('.on').removeClass('on').addClass('off');
        $('.on').prev().prop('checked', true);

        //on selectionne l'element en cours
        $(this).removeClass('off').addClass('on');
        $(this).prev().prop('checked', true);


    });

    //Vérif saisie
    $('#btn').click(function(){
       console.log($('input[name=choix]:checked').val())
    });

});//fin listener de base