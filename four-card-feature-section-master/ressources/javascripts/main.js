document.addEventListener('DOMContentLoaded', () => {
    fetch('./ressources/data/structure.json')
        .then(response => {
                if (!response.ok) {
                  throw new Error('Erreur de réseau');
                }
            return response.json();
            })

        .then(structure => {
            return fetch('./ressources/data/data.json')
            .then(response => {
              if (!response.ok) {
                throw new Error('Erreur de réseau');
              }
              return response.json();
            })
            .then(data => {      
                // ------ NAVBAR ------ //
                const body = document.body;

                const NAVBAR = document.createElement('header');
                NAVBAR.classList.add('navbar')
                const navData = structure.navbar;

                const navHome = document.createElement('a');
                navHome.href = "..";
                NAVBAR.append(navHome);

                const navHome_Img = document.createElement('img');
                navHome_Img.src = navData.img.imgUrl;
                navHome_Img.alt = navData.img.imgAlt;
                navHome.appendChild(navHome_Img);

                const navUl = document.createElement('ul');
                for(i=0; i < navData.links.length; i++) {
                    const navLi = document.createElement('li');
                    const navLiA = document.createElement('a');
                    navLiA.href = navData.links[i].url;
                    navLiA.target = navData.links[i].target;
                    const navLiASpan = document.createElement('span');
                    navLiASpan.innerText = navData.links[i].text;

                    navLiA.appendChild(navLiASpan);
                    navLi.appendChild(navLiA);
                    navUl.appendChild(navLi);
                }
                NAVBAR.appendChild(navUl);

                // ------ FOOTER ------ //

                const FOOTER = document.createElement('footer');
                FOOTER.classList.add('challenge')
                const footerData = structure.footer;

                const ChallengedP = document.createElement('p');
                ChallengedP.innerText = footerData.p[0];
                FOOTER.appendChild(ChallengedP);

                const ChallengerA = document.createElement('a');
                ChallengerA.href = footerData.a.frontend.url;
                ChallengerA.target = footerData.a.frontend.target;
                ChallengerA.innerText = footerData.a.frontend.text;
                FOOTER.appendChild(ChallengerA);

                const DevP = document.createElement('p');
                DevP.innerText = footerData.p[1];
                FOOTER.appendChild(DevP);

                const Dev = document.createElement('a');
                Dev.href = footerData.a.dev.url;
                Dev.target = footerData.a.dev.target;
                Dev.innerText = footerData.a.dev.text;
                FOOTER.appendChild(Dev);

                // ------ DATA ------ //
                const dataDiv = document.createElement('div');
                dataDiv.classList.add('main');
                
                // ------ HEAD ------ //
                const headData = data.main.head;
                const headDiv = document.createElement('div');
                headDiv.classList.add('head');
                dataDiv.appendChild(headDiv);

                const firstHead = document.createElement('h2');
                firstHead.innerText = headData.firstHead;
                firstHead.classList.add('firstHead');
                headDiv.appendChild(firstHead);

                const secondHead = document.createElement('h2');
                secondHead.innerText = headData.secondHead;
                secondHead.classList.add('secondHead');
                headDiv.appendChild(secondHead);

                const subHead = document.createElement('h6');
                subHead.innerText = headData.subHead;
                headDiv.appendChild(subHead);

                // ------ GRID ------ //
                const cardDiv = document.createElement('div')
                cardDiv.classList.add('cards');
                dataDiv.appendChild(cardDiv);

                // ------ COLUMNS ------ //
                const firstColDiv = document.createElement('div');
                firstColDiv.classList.add('firstCol');
                cardDiv.appendChild(firstColDiv);

                const secondColDiv = document.createElement('div')
                secondColDiv.classList.add('secondCol');
                cardDiv.appendChild(secondColDiv);

                const thirdColDiv = document.createElement('div');
                thirdColDiv.classList.add('thirdCol');
                cardDiv.append(thirdColDiv)

                // ------ SUPERVISOR CARD ------ //

                const supData = data.main.cards.firstCol.supervisor_card;
                const supDiv = document.createElement('div');
                supDiv.classList.add('supervisor');
                supDiv.classList.add('card');
                firstColDiv.appendChild(supDiv);

                const supTitle = document.createElement('h1');
                supTitle.innerText = supData.title;
                supDiv.appendChild(supTitle);

                const supDesc = document.createElement('p');
                supDesc.innerText = supData.desc;
                supDiv.appendChild(supDesc);

                const supImgDiv = document.createElement('div');
                supDiv.appendChild(supImgDiv);
                
                const supImg = document.createElement('img');
                supImg.src = supData.src;
                supImg.alt = supData.alt;
                supImgDiv.appendChild(supImg);

                // ------ TEAM CARD ------ //
                const teamData = data.main.cards.secondCol.teambuilder_card;
                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');
                teamDiv.classList.add('card');
                secondColDiv.appendChild(teamDiv);

                const teamTitle = document.createElement('h1');
                teamTitle.innerText = teamData.title;
                teamDiv.appendChild(teamTitle);

                const teamDesc = document.createElement('p');
                teamDesc.innerText = teamData.desc;
                teamDiv.appendChild(teamDesc);

                const teamImgDiv = document.createElement('div');
                teamDiv.appendChild(teamImgDiv);

                const teamImg = document.createElement('img');
                teamImg.src = teamData.src;
                teamImg.alt = teamData.alt;
                teamImgDiv.appendChild(teamImg);

                // ------ KARMA CARD ------ //
                const karmaData = data.main.cards.secondCol.karma_card;
                const karmaDiv = document.createElement('div')
                karmaDiv.classList.add('karma');
                karmaDiv.classList.add('card');
                secondColDiv.appendChild(karmaDiv);

                const karmaTitle = document.createElement('h1');
                karmaTitle.innerText = karmaData.title;
                karmaDiv.appendChild(karmaTitle);

                const karmaDesc = document.createElement('p');
                karmaDesc.innerText = karmaData.desc;
                karmaDiv.appendChild(karmaDesc);

                const karmaImgDiv = document.createElement('div');
                karmaDiv.appendChild(karmaImgDiv);

                const karmaImg = document.createElement('img');
                karmaImg.src = karmaData.src;
                karmaImg.alt = karmaData.alt;
                karmaImgDiv.appendChild(karmaImg);

                // ------ CALCULATOR CARD ------ //
                const calcData = data.main.cards.thirdCol.calculator_card;
                const calculatorDiv = document.createElement('div');
                calculatorDiv.classList.add('calculator');
                calculatorDiv.classList.add('card');
                thirdColDiv.appendChild(calculatorDiv);

                const calcTitle = document.createElement('h1');
                calcTitle.innerText = calcData.title;
                calculatorDiv.appendChild(calcTitle);

                const calcDesc = document.createElement('p');
                calcDesc.innerText = calcData.desc;
                calculatorDiv.appendChild(calcDesc);

                const calcImgDiv = document.createElement('div');
                calculatorDiv.appendChild(calcImgDiv);

                const calcImg = document.createElement('img');
                calcImg.src = calcData.src;
                calcImg.alt = calcData.alt;
                calcImgDiv.appendChild(calcImg);

                // ------ FINAL STEP ------ //  

                body.appendChild(NAVBAR);
                body.appendChild(dataDiv)
                body.appendChild(FOOTER);
            })
        })
})