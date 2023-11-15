loadCart()
setCartQuantity()

function openCat(cat){
  session.searchCat = cat
  saveSession()
  window.location.replace('./views/store.html')
}