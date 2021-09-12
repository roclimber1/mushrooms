

import Game from './game'


const TIME_INTERVAL = 1000
const SCENE_SIZE = {
    WIDTH: window.innerWidth / 2,
    HEIGHT: window.innerHeight / 2
}


const addElement = (): void => {
    
    const welcomeText = 'Mushrooms game'
    
    const rootBlock: HTMLElement = document.getElementById('root')
    const mainDiv: HTMLDivElement = document.createElement('div')
    
    mainDiv.innerHTML = `<h1>${welcomeText}</h1>`
    

    rootBlock.appendChild(mainDiv)

}

addElement()

const game = new Game(SCENE_SIZE.WIDTH, SCENE_SIZE.HEIGHT)
let intervalHandler = null


const runGame = (): any => {

    let time = 0

    intervalHandler = setInterval(
        () => {
            game.animation(time)

            time += TIME_INTERVAL
        },
        TIME_INTERVAL
    )
}


const clearData = (): any => {
    clearInterval(intervalHandler)
    intervalHandler = undefined
}


document.body.onload = runGame()
document.body.onclose = clearData()


