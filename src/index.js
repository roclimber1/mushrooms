


const addElement = () => {
    
    const welcomeText = 'Mushrooms game - this is the beginnig!'

    const rootBlock = document.getElementById('root')
    const mainDiv = document.createElement('div')
    
    mainDiv.innerHTML = `<h1>${welcomeText}</h1>`
    

    rootBlock.appendChild(mainDiv)

}


document.body.onload = addElement

