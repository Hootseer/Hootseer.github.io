function OnOfList(i) {
    const bookList = document.querySelector(`.book-list${i}`);
    const arrow = document.querySelector(`.book-button${i} img`)
    if (bookList.classList.contains('non-visible')) {
        bookList.classList.remove('non-visible')
        arrow.src='/Assets/Icons/Chevron down.png'
        
    } else {
        bookList.classList.add('non-visible')
        arrow.src='/Assets/Images/Chevron left.png'
    }
}