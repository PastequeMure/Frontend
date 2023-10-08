document.addEventListener('DOMContentLoaded', () => {
    fetch('./ressources/data/data.json')
    .then(response => response.json())
    .then(data => {
        const body = document.body;
        const head = document.head;

        const title = document.createElement('title')
        title.innerText = data.title
        head.appendChild(title)

        // ------ NAVBAR ------ //
        const NAVBAR = document.createElement('header');
        NAVBAR.classList.add('navbar');
        body.appendChild(NAVBAR)

            const NavHome = document.createElement('a');
            NavHome.href = ".."
            NAVBAR.appendChild(NavHome);

                const HomeImg = document.createElement('img');
                HomeImg.src = data.navbar.img.imgUrl;
                HomeImg.alt = data.navbar.img.imgAlt;
                NavHome.appendChild(HomeImg);

            const NavUl = document.createElement('ul');
            NAVBAR.appendChild(NavUl);

                const links = data.navbar.links;
                for(let i=0; i < links.length; i++) {
                    const NavLi = document.createElement('li');
                    NavUl.appendChild(NavLi);

                        const NavLiA = document.createElement('a');
                        NavLiA.href = links[i].url;
                        NavLiA.target = links[i].target;
                        NavLi.appendChild(NavLiA);

                            const NavLiASpan = document.createElement('span');
                            NavLiASpan.innerText = links[i].text;
                            NavLiA.appendChild(NavLiASpan);
                };

        // ------ MAIN DIV ------ //
        const mainDiv = document.createElement('div')
        mainDiv.classList.add('main');
        mainDiv.setAttribute('id','main');
        body.appendChild(mainDiv);

                // --- LOGO --- //
                const logoDiv = document.createElement('div');
                logoDiv.classList.add('logo');
                mainDiv.appendChild(logoDiv);

                    const logo = document.createElement('img');
                    logo.src = data.mainDiv.logo;
                    logo.alt = data.mainDiv.logo.split('/').filter(word => /\.[^.]+$/.test(word)).toString().replace(/\.[^.]+$/, '')
                    logoDiv.appendChild(logo);

                const illustrationDiv = document.createElement('div');
                illustrationDiv.classList.add('illustration');
                mainDiv.appendChild(illustrationDiv);

                    const illustration = document.createElement('img');
                    illustration.src = data.mainDiv.illustration;
                    illustration.alt = data.mainDiv.illustration.split('/').filter(word => /\.[^.]+$/.test(word)).toString().replace(/\.[^.]+$/, '');
                    illustrationDiv.appendChild(illustration);

                const textDiv = document.createElement('div');
                textDiv.classList.add('data');
                mainDiv.appendChild(textDiv);

                    const h1 = document.createElement('h1');
                    h1.innerText = data.mainDiv.h1;
                    textDiv.appendChild(h1);

                    const paragraph = document.createElement('p');
                    paragraph.innerText = data.mainDiv.p;
                    textDiv.appendChild(paragraph);

                    const registerBtn = document.createElement('button');
                    registerBtn.type = "button";
                    registerBtn.innerText = data.mainDiv.button;
                    textDiv.appendChild(registerBtn);

                    const socialsUl = document.createElement('ul');
                    socialsUl.classList.add('socials');
                    mainDiv.appendChild(socialsUl);

                        const socials = data.mainDiv.socials;
                        async function getSvg() {
                            for(const social of socials) {
                                try {
                                    const response = await fetch(social);
                                    if(response.ok) {
                                        const svg = await response.text();
                                        const normalizedAlt = social.split('/').filter(word => /\.[^.]+$/.test(word)).toString().replace(/\.[^.]+$/, '');

                                            const socialLi = document.createElement('li');
                                            socialsUl.appendChild(socialLi);

                                                const socialLiA = document.createElement('a');
                                                socialLiA.href = `https://${normalizedAlt}.com`;
                                                socialLiA.target = "_blank";
                                                socialLiA.innerHTML = svg;
                                                socialLi.appendChild(socialLiA);

                                    } else {
                                        return;
                                    }
                                } catch(error) {
                                    console.error(error);
                                }
                            }
                        }
                        getSvg();

        // ------ FOOTER ------ //
        const FOOTER = document.createElement('footer');
        FOOTER.classList.add('challenge');
        body.appendChild(FOOTER);
                
                const firstP = document.createElement('p');
                firstP.innerText = data.footer.p[0];
                FOOTER.appendChild(firstP);

                const challenger = document.createElement('a');
                challenger.href = data.footer.frontend.url;
                challenger.target = data.footer.frontend.target;
                challenger.innerText = data.footer.frontend.text;
                FOOTER.appendChild(challenger)

                const secondP = document.createElement('p');
                secondP.innerText = data.footer.p[1];
                FOOTER.appendChild(secondP);

                const dev = document.createElement('a');
                dev.href = data.footer.dev.url;
                dev.target = data.footer.dev.target;
                dev.innerText = data.footer.dev.text;
                FOOTER.appendChild(dev);
    })
})