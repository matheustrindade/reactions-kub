function displayReaction(reaction) {
    const labelElem = document.getElementById('label')
    labelElem.innerText = reaction.text

    const emojiWrapper = document.getElementById('emoji-content')
    emojiWrapper.innerHTML = reaction.emoji

    const actionButton = document.getElementById('action-button')
    const actionButtonClassName = actionButton.className

    const retryClassName = 'card__actionButton__retry'
    console.log({actionButtonClassName})
    if (!actionButtonClassName?.includes(retryClassName)) {
        actionButton.className = `${actionButtonClassName} ${retryClassName}`
        actionButton.innerText = 'Retry'
    }
}



function makeResques() {
    fetch('http://back:3000/reaction')
        .then(rawResponse => rawResponse.json())
        .then(displayReaction)
        .catch(() => {
            //do sth
        })
}