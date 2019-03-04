$.getJSON( "product.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push('<li class="media"><img src="'+val.img+'" class="  img-thumbnail" alt="..."><div class="media-body"><h5 class="mt-0 mb-1">'+ val.name +'</h5>'+val.detail.desc+'<p><p><strong>'+val.detail.price+'</strong></p></p><span class="badge badge-info">'+val.detail.category[0]+'</span></div></li>');
      
      console.log(val.name);
      $('#myUL').html(items);
    });
});
   

function SearchProduct() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



$(".portfolio-img").click(function(){
    $('#exampleModal').modal('show');
    $('#exampleModalLabel').text($(this).text());

    var Imgurl = $(this).closest('.single-portfolio-content').find('img.img-thumbnail').attr('src');      

    $('.modal-body').html('<img src='+Imgurl+' width="100%">');

})