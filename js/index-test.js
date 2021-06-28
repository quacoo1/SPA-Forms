console.log('loaded js')

// The hashchange is not triggered when the page is loaded, and the hashchange event is fired actively here.
// Why should I trigger the hashchange onload
window.addEventListener('DOMContentLoaded', onLoad)
 // Listen for routing changes
window.addEventListener('hashchange', onHashChange)
 
 // route view
let routerView = null
 
function onLoad () {
  routerView = document.querySelector('#routeView')
  onHashChange()
}
 
 // When the route changes, the corresponding UI is rendered according to the route.
function onHashChange () {
  switch (location.hash) {
    case '#/home':
      routerView.innerHTML = 'Home'
      return
    case '#/about':
      routerView.innerHTML = 'About'
      return
    default:
      return
  }
}