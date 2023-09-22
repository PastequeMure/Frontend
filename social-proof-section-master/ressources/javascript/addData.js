document.addEventListener("DOMContentLoaded", function() {
    fetch('./ressources/assets/data/data.json')
        .then(response => response.json())
        .then(data =>  {
                        
            const body = document.body;
            const mainIco = "./ressources/assets/images/main.webp";
            const desk_design = "./ressources/assets/render/desktop-design.jpg";
            const mobile_design = "./ressources/assets/render/mobile-design.jpg";
            const challengeUrl = "https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA";
            const challengeWeb = "https://www.frontendmentor.io?ref=challenge";
            const devGit = "https://github.com/PastequeMure";
            const data_header = data.header;
            const subheader = data.subheader;
            const ratings = data.rating;
            const cards = data.cards;
            const star = "./ressources/assets/images/icon-star.svg";
            const starNumber = 5;

            const header = document.createElement('header');
            header.innerHTML = 
            `
            <a href=".."><img src="${mainIco}" alt="Home"></a>
            <div class="headerDivider"></div>
            <ul>
                <li><a href="${desk_design}" target="_blank"><span>Desktop Model</span></a></li>
                <li><a href="${mobile_design}" target="_blank"><span>Mobile Model</span></a></li>
                <li><a href="${challengeUrl}" target="_blank"><span>Challenge</span></a></li>
            </ul>
            `;
            header.classList.add('navbar')

            const footer = document.createElement('footer');
            footer.innerHTML = 
            `
            <p>
                Challenge by <a href="${challengeWeb}" target="_blank"> Frontend Mentor</a>. 
                Coded by <a href="${devGit}" target="_blank" class="pasteque"> Pastèque Mûre</a>.
            </p>
            `;
            footer.classList.add('challenge');

            const challengeDiv = document.createElement('div')
            challengeDiv.classList.add('data');
            challengeDiv.setAttribute('id', "data");

            const bigHead = document.createElement('div');
            bigHead.classList.add('head');
            bigHead.setAttribute('id', "head");
            bigHead.innerHTML = 
            `
            <h1>${data_header}</h1>
            <p>${subheader}</p>
            `;

            const ratingDiv = document.createElement('ul');
            ratingDiv.classList.add('rating');
            ratingDiv.setAttribute('id', "rating");

            ratings.forEach(rate => {
                const rateDiv = document.createElement('li');
                const imgDiv = document.createElement('div');
                for(i=0; i < starNumber; i++) {
                    const starImg = document.createElement('img');
                    starImg.src = star;
                    starImg.alt = `icon-star_${i + 1}`;

                    imgDiv.appendChild(starImg)
                };

                const rateData = document.createElement('p');
                rateData.innerText = rate;

                rateDiv.appendChild(imgDiv)
                rateDiv.appendChild(rateData);
                ratingDiv.appendChild(rateDiv)
            })

            const cardsDiv = document.createElement('div');
            cardsDiv.classList.add('cards');
            cardsDiv.setAttribute('id', 'cards');

            cards.forEach(card => {
                const onceCard = document.createElement('div');
                const cardhead = document.createElement('div');
                const cardBody = document.createElement('div');
                const cardImg = document.createElement('img');
                const cardName = document.createElement('p');
                const cardStatus = document.createElement('span');
                const cardDesc = document.createElement('p');

                cardhead.classList.add('card_head');
                cardhead.setAttribute("id", "card_head");

                cardBody.classList.add('card_body');
                cardBody.setAttribute('id',"card_body");

                cardName.innerText = card.name;
                cardStatus.innerText = card.status;
                cardDesc.innerText = card.desc;
                cardImg.src = card.img;
                cardImg.alt = `img_${card.name}`;

                cardhead.appendChild(cardImg);
                cardhead.appendChild(cardName);
                cardhead.appendChild(cardStatus);

                cardBody.appendChild(cardDesc);

                const name_to_id = card.name.replace(" ","-").toLowerCase();
                onceCard.classList.add('card');
                onceCard.setAttribute('id', name_to_id);
                onceCard.appendChild(cardhead);
                onceCard.appendChild(cardBody);

                cardsDiv.appendChild(onceCard)

            })



            challengeDiv.appendChild(bigHead);
            challengeDiv.appendChild(ratingDiv);
            challengeDiv.appendChild(cardsDiv);


            body.appendChild(header);
            body.appendChild(challengeDiv);
            body.appendChild(footer);

        })
        .catch(error => console.error('Error fetching data:', error));
});