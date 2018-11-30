$('h1.title').append('<button id="btnplayers" style="background-color: #eac30f;">P</button>');
$('h1.title').append('<input type="text" value="" id="codep" style="font-size: 0.1em!important;width: 5%!important;z-index: -1;position: absolute;">');

$('#btnplayers').on('click',function(){
    var str = '';
    $('.listFUTItem').each(function(){
        var name = $(this).find('.name').text();
        var rating = $(this).find('.rating').text();
        var price = $(this).find('.auctionValue .coins.value:eq(1)').text();
        str = str + name + '/' + rating + '/' + price + '&';
    });
    $('#codep').val(str);

    var copyText = document.getElementById("codep");
    copyText.select();
    document.execCommand("copy");
});