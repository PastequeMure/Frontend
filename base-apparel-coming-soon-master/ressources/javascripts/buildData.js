import { checkMail } from "./checkMail.js";
export function buildData () {
    fetch('./ressources/data/Data.json')
        .then(response => response.json())
        .then(data => {
            const mainDiv = document.getElementById('main');
            console.log(mainDiv)

            // ------ LOGO ------ //

            const logoDiv = document.createElement('div');
            logoDiv.classList.add('logo');
            mainDiv.appendChild(logoDiv);

            const logo = data.logo;
            const logoImg = document.createElement('img');
            logoImg.src = logo.src;
            logoImg.alt = logo.alt;
            logoDiv.appendChild(logoImg);

            // ------ HERO ------ //

            const hero = data.hero;
            const heroDiv = document.createElement('div');
            heroDiv.classList.add('hero');
            mainDiv.appendChild(heroDiv);

            const desk_hero = document.createElement('img');
            desk_hero.src = hero.desk.src;
            desk_hero.alt = hero.desk.alt;
            desk_hero.classList.add('desk');
            heroDiv.appendChild(desk_hero);

            const mob_hero = document.createElement('img');
            mob_hero.src = hero.mobile.src;
            mob_hero.alt = hero.mobile.alt;
            mob_hero.classList.add('mob')
            heroDiv.appendChild(mob_hero);

            // ------ TEXT ------ //
            const head = data.head;
            const text = data.text;

            const headDiv = document.createElement('div')
            headDiv.classList.add('head');
            mainDiv.appendChild(headDiv);

            const splitHead = head.split(' ');
            for(let i=0; i < splitHead.length; i++) {
                const heads = document.createElement('h1');
                heads.innerText = splitHead[i].toUpperCase();
                heads.classList.add(`item-${i + 1}`);
                headDiv.appendChild(heads);
            };

            const textText = document.createElement('p');
            textText.innerText = text;
            headDiv.appendChild(textText);

            // ------ EMAIL ------ //
            const placeholder = data.placeholder;
            const error_ico = data.error;
            const arrow_ico = data.arrow;

            const inputDiv = document.createElement('form');
            mainDiv.appendChild(inputDiv);

            const input = document.createElement('input');
            input.type = "text";
            input.placeholder = placeholder;
            input.setAttribute('id', 'mail');
            inputDiv.appendChild(input);

            const errorImg = document.createElement('img');
            errorImg.src = error_ico.src;
            errorImg.alt = error_ico.alt;
            errorImg.classList.add('error');
            errorImg.setAttribute('id','error_ico');
            inputDiv.appendChild(errorImg);

            const arrowLabel = document.createElement('label');
            arrowLabel.setAttribute('for', 'mail');
            arrowLabel.setAttribute('id', 'check');
            inputDiv.appendChild(arrowLabel);

            const arrowImg = document.createElement('img');
            arrowImg.src = arrow_ico.src;
            arrowImg.alt = arrow_ico.alt;
            arrowLabel.appendChild(arrowImg);

            const errorText = data.error.text;
            const errorMsg = document.createElement('span');
            errorMsg.innerText = errorText;
            errorMsg.classList.add('errorMsg');
            errorMsg.setAttribute('id', 'error_message');
            mainDiv.appendChild(errorMsg);

            const validText = data.valid;
            const validMsg = document.createElement('span');
            validMsg.innerText = validText;
            validMsg.classList.add('valid');
            validMsg.setAttribute('id',"valid");
            mainDiv.appendChild(validMsg);

            checkMail();

            
        })
    }