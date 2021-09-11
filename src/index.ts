


const addElement = (): void => {
    
    const welcomeText = 'Mushrooms game - this is the beginnig! I\'ve decided to use TypeScript.'
    
    const rootBlock: HTMLElement = document.getElementById('root')
    const mainDiv: HTMLDivElement = document.createElement('div')
    
    mainDiv.innerHTML = `<h1>${welcomeText}</h1>`
    

    rootBlock.appendChild(mainDiv)

}


document.body.onload = addElement

