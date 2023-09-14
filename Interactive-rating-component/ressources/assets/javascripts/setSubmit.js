document.addEventListener('DOMContentLoaded', () => {
    const ratingItems = document.querySelectorAll('.rating li');
    let ratingData;

    ratingItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            ratingItems.forEach((li) => {
                li.classList.remove('active');
            });
            item.classList.add('active');

            ratingData = document.getElementById('ratingData');
            ratingData.textContent = `You selected ${index + 1} out of 5`;
        });
    });

    const SubmitBtn = document.querySelector('.submit');
    const ratingContainer = document.querySelector('.ratingContainer');
    const thankContainer = document.querySelector('.thankContainer');
    const noData = document.querySelector('.nodata')

    SubmitBtn.addEventListener('click', () => {
        if(ratingData !== undefined) {
            ratingContainer.style.display = 'none';
            thankContainer.style.display = 'block';
        } else {
            noData.style.display = 'flex'
        }

    })
});