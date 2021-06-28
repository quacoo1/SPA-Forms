//INPUTS

const inputsTemplate = {
  '#/1': function(){ 
    this.images = {'0': null},
    this.description = ''
  },
  '#/2': function(){
    this.images={'0': null,'1': null,'2': null,'3': null }
  },
  '#/3':function(){
    this.images={'0': null}
  },
  '#/4':function(){
    this.images={'0': null}
  },
  '#/thankyou': function(){
    this.mobile=null
    this.email=null
    this.firstname=null
    this.postcode=null
  }
}

const inputs = {}
//modal elements
let modalContainer
let modalContent

//ROUTING
let routerView = null;

window.addEventListener('DOMContentLoaded', (e)=>{

  modalContainer = document.querySelector('.modal-container')
  modalContent = document.querySelector('.modal__message')
  document.querySelector('.modal__confirm').addEventListener('click',(e)=>{
    modalContainer.classList.remove('modal-container--show')
  })

  routerView = document.querySelector('#routeView')
  window.location.hash = '#/1';
  onRouteChange()
})

window.addEventListener('hashchange', onRouteChange)
 // When the route changes, the corresponding UI is rendered according to the route.
function onRouteChange () {

  inputs[location.hash] = new inputsTemplate[location.hash]()
  console.log(inputs[location.hash])

  switch (location.hash) {
    case'#/1':{
      routerView.innerHTML=templates.photos1;
      routeOtherEvents()
      routeNavigationEvents('#/2')
    }
    return

    case '#/2':{
      routerView.innerHTML=templates.photos2;
      routeOtherEvents()
      routeNavigationEvents( '#/3')
    }
    return

    case '#/3':{
      routerView.innerHTML=templates.mudmap1;
      routeOtherEvents()
      routeNavigationEvents('#/4')
    }
    return
    case '#/4':{
      routerView.innerHTML=templates.mudmap2;
      routeOtherEvents()
      routeNavigationEvents('#/thankyou')
    }
    return
    case '#/thankyou':{
      routerView.innerHTML=templates.thankyou;
      routeSubmit()
    }
    return
    default:
      return
  }
}


//NAVIGATION EVENTS
function routeNavigationEvents(next){
  const togglePage = document.querySelectorAll('#btn_next')
  togglePage.forEach(button => {
    button.addEventListener('click',(e)=>{
      let imageExist = false
      for( let i=0; i < 4; i++){
        if(inputs[location.hash].images[`${i}`] || location.hash === '#/2') {
          imageExist = true;
          break;
        }
      }

      if(!imageExist){
        modalShow('You must upload an <b>image</b> to continue')
      }else{
        window.location.hash = next
        e.preventDefault()
      }
    })
  })
}

//SUBMIT EVENT
function routeSubmit(){
  const formInputs = [ document.querySelector('#mobile'), document.querySelector('#email'), document.querySelector('#firstname'),document.querySelector('#postcode')]
  console.log(formInputs)
  const submit = document.querySelector('#btn_submit')

  submit.addEventListener('click',(e)=>{
    let err = false
    formInputs.forEach(element=>{
      if (!element.value) {
        element.classList.add('details__text--error')
        err = true
      }
    })
    if(err){
      modalShow('One or more <b>form(s)</b> not filled')
    }else{
      /* Insert Post Request*/
      window.open("/complete.html","_self")
    }
    
  })

}


//ELEMENT EVENTS
function routeOtherEvents(){
const imageInputArea = document.querySelectorAll('.image-input__upload-area')
let imageSelected = []

const textInputArea = document.querySelector('.text-input__textarea')
if(textInputArea){
  textInputArea.addEventListener('change',(e)=>{
    if(inputs[location.hash]) inputs[location.hash].description = textInputArea.value
  })
}
imageInputArea.forEach((inputElement,index)=>{
    const inputPlaceholder = inputElement.querySelector('.image-input__uploadlable-image')
    const inputButton = inputElement.querySelector('.image-input__upload-button')
    const cancelButton = inputElement.querySelector('.image-input__cancel')
    const uploadText = inputElement.querySelector('.image-input__upload-text')
    imageSelected.push(false)

    //image upload input events
    inputElement.addEventListener('click',(e)=>{
        if(!imageSelected[index]) inputButton.click()
    })

    inputElement.addEventListener('dragover',(e)=>{
        e.preventDefault() 
        if(!imageSelected[index]) inputElement.classList.add('image-input--dragover')
    })

    inputElement.addEventListener('dragend',(e)=>{
        inputElement.classList.remove('image-input--dragover')
    })

    inputElement.addEventListener('dragleave',(e)=>{
        inputElement.classList.remove('image-input--dragover')
    })

    inputElement.addEventListener('drop',(e)=>{
        e.preventDefault()
        if(e.dataTransfer.files && !imageSelected[index]){
            uploadImage(e.dataTransfer.files[0],inputElement,index)
            imageSelected[index] = true
            inputElement.classList.remove('image-input--dragover')
        }
    })

    inputButton.addEventListener('change',(e)=>{
        if(!imageSelected[index]) {
            uploadImage(inputButton.files[0],inputElement,index)
            imageSelected[index] = true
        }
    })

    cancelButton.addEventListener('click',(e)=>{
        e.stopPropagation() 
        inputButton.value = '',
        inputPlaceholder.src= "assets/upload.svg"
        cancelButton.style.display = 'none'
        imageSelected[index] = false
        if(uploadText) uploadText.textContent = 'upload / drag image'
        inputs[location.hash].images[`${index}`] = null
    })
})

function uploadImage(file,inputElement,index){
    const inputPlaceholder = inputElement.querySelector('.image-input__uploadlable-image')
    const cancelButton = inputElement.querySelector('.image-input__cancel')
    const uploadText = inputElement.querySelector('.image-input__upload-text')


    const reader = new FileReader()

    reader.readAsDataURL(file) 
    reader.onload = () => {   
        if(file.type.startsWith("image/")){
            if(inputs[location.hash]) inputs[location.hash].images[`${index}`] = file
            inputPlaceholder.src = `${ reader.result }` 
            cancelButton.style.display = 'flex'
            if(uploadText) uploadText.textContent = `"${file.name}"`
        }else{
            modalShow("Input must be an <b>image</b>.")
            imageSelected[index] = false
        }
    }
    
}
}

//MODAL EVENTS
function modalShow(message){
  modalContainer.classList.add('modal-container--show')
  modalContent.innerHTML = message
}
