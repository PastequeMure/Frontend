
export function buildStructure () {
    fetch('./ressources/data/structure.json')
        .then(response => response.json())
        .then(structure => {

            const body = document.body;
            const NAVBAR = document.createElement('header');
            NAVBAR.classList.add('navbar');
            const FOOTER = document.createElement('footer');
            FOOTER.classList.add('challenge');

            // ------ NAVBAR ------ //
            const navData = structure.navbar;
            const HomeA = document.createElement('a');
            HomeA.href = "..";
            NAVBAR.appendChild(HomeA);

            const HomeImg = document.createElement('img');
            HomeImg.src = navData.img.imgUrl;
            HomeImg.alt = navData.img.imgAlt;
            HomeA.appendChild(HomeImg);

            const navUl = document.createElement('ul');
            NAVBAR.appendChild(navUl)
            const links = navData.links;
            for(let i=0 ; i < links.length; i++) {
                const navLi = document.createElement('li');
                navUl.appendChild(navLi);
                
                const navLiA = document.createElement('a');
                navLiA.href = links[i].url;
                navLiA.target = links[i].target;
                const navLiASpan = document.createElement('span');
                navLiASpan.innerText = links[i].text;
                navLiA.appendChild(navLiASpan);
                navLi.appendChild(navLiA);
            };
            // ------ MAIN DIV ------ //
            const mainDiv = document.createElement('div');
            mainDiv.classList.add('main');
            mainDiv.setAttribute('id', "main");

            // ------ FOOTER ------ //
            const footData = structure.footer;
            const firstP = document.createElement('p');
            firstP.innerText = footData.p[0];
            FOOTER.appendChild(firstP);

            const challenger = footData.a.frontend;
            const challengeA = document.createElement('a');
            challengeA.href = challenger.url;
            challengeA.target = challenger.target;
            challengeA.innerText = challenger.text;
            FOOTER.appendChild(challengeA);

            const secondP = document.createElement('p');
            secondP.innerText = footData.p[1];
            FOOTER.appendChild(secondP);

            const dev = footData.a.dev;
            const devA = document.createElement('a');
            devA.href = dev.url;
            devA.target = dev.target;
            devA.innerText = dev.text;
            FOOTER.appendChild(devA);

            body.appendChild(NAVBAR);
            body.appendChild(mainDiv);
            body.appendChild(FOOTER);

        })
        .catch(error => {
          console.error('Erreur de chargement du JSON :', error);
        });

}