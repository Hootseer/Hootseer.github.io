function OnOfList(i) {
    const noteList = document.querySelector(`.note-list${i}`);
    const arrow = document.querySelector(`.note-button${i} img`)
    if (noteList.classList.contains('non-visible')) {
        noteList.classList.remove('non-visible')
        arrow.src='/Assets/Icons/Chevron down.png'
        
    } else {
        noteList.classList.add('non-visible')
        arrow.src='/Assets/Images/Chevron left.png'
    }
}

