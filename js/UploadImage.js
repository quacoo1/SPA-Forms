const inputArea = document.querySelectorAll('.image-input__upload-area')
let imageSelected = []

inputArea.forEach((inputElement,index)=>{

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
            console.log(e.dataTransfer.files)
            uploadImage(e.dataTransfer.files[0],inputElement,index)
            imageSelected[index] = true
            inputElement.classList.remove('image-input--dragover')
        }
    })

    inputButton.addEventListener('change',(e)=>{
        if(!imageSelected[index]) {
            uploadImage(inputButton.files[0],inputElement,index)
            imageSelected[index] = true
            console.log(imageSelected)
        }
    })

    cancelButton.addEventListener('click',(e)=>{
        e.stopPropagation() 
        inputButton.value = '',
        inputPlaceholder.src= "upload.svg"
        cancelButton.style.display = 'none'
        imageSelected[index] = false
        if(uploadText) uploadText.textContent = 'upload / drag image'
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
            inputPlaceholder.src = `${ reader.result }` 
            cancelButton.style.display = 'flex'
            if(uploadText) uploadText.textContent = `"${file.name}"`
        }else{
            alert("Input Must Be An Image!")
            imageSelected[index] = false
        }
    }
    
}


