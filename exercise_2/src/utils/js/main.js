$(function(){
  var listProductPrice = $( "p" ).find( "body" )

  console.log(Array.from(listProductPrice.prevObject));

  const allPrices = Array.from(listProductPrice.prevObject).reduce((cont, el) => {
    const value = el.innerText.replace('Dell Price $', '')
    return cont + (+value);
  }, 0)

  alert(`Price of all products: R$${allPrices.toFixed(2)}`)
})

$( "#main-image" ).on( "click", function() {
  window.open('https://www.dell.com/en-us/shop/monitors-monitor-accessories/ac/4009');
});

$( "#text-one" ).on( "click", function() {
  window.open('https://deals.dell.com/en-us/category/monitors');
});

$( "#text-two" ).on( "click", function() {
  window.open('https://www.dell.com/en-us/shop/monitors-monitor-accessories/ac/4009');
});

$( "#line" ).on( "click", function(event) {
  return false;
});

