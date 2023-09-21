document.addEventListener('DOMContentLoaded', () => {
    const faqQuestion = document.querySelectorAll('.accoridion_js li');

    faqQuestion.forEach((item, index) => {
        
        item.addEventListener('click', () => {
            if(item.classList.contains('active')) {
                item.classList.remove('active')
            } else {
                item.classList.add('active')
            }
        })
    })
})