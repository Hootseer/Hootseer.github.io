function toggleQ(i) {
    const answer = document.querySelector(`.answer${i}`);
    if (answer.classList.contains('non-visible')) {
        answer.classList.remove('non-visible')
        
    } else {
        answer.classList.add('non-visible')
    }
}