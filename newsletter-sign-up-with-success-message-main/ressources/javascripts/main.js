document.addEventListener('DOMContentLoaded', () => {
    fetch('./ressources/data/data.json')
    .then(response => response.json())
    .then(data => {
        const body = document.body;

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

        const subsSection = document.createElement('section');
        subsSection.classList.add('subscription-section');
        subsSection.setAttribute('id','subs');
        mainDiv.appendChild(subsSection);

            const heroDiv = document.createElement('div');
            heroDiv.classList.add('hero');
            subsSection.appendChild(heroDiv);

            let hero;
            function updateHero() {
                if(window.innerWidth < 720) {
                    hero = data.mainDiv.hero.mobile;
                } else {
                    hero = data.mainDiv.hero.desk;
                }
            }

            async function getSvg(url) {
                try {
                    const responseSvg = await fetch(url);
                    if(responseSvg.ok) {
                        return await responseSvg.text()
                    } else {
                        throw new Error("svg_err")
                    }
                } catch (err) {
                    console.error(err);
                    return null;
                }
            }

            function handleRezise() {
                updateHero();
                getSvg(hero)
                    .then((svg) => {
                        if(svg !== null) {
                            heroDiv.innerHTML = svg
                        }
                    })
            }
            handleRezise();
            window.addEventListener('resize', handleRezise);

            const textDiv = document.createElement('div');
            textDiv.classList.add('data');
            subsSection.appendChild(textDiv);

                const textH1 = document.createElement('h1');
                textH1.innerText = data.mainDiv.TEXT.h1;
                textDiv.appendChild(textH1);

                const textPara = document.createElement('p');
                textPara.innerText = data.mainDiv.TEXT.paragraph;
                textDiv.appendChild(textPara);

                const checkUl = document.createElement('ul');
                checkUl.classList.add('checklist');
                textDiv.appendChild(checkUl);

                    const checklist = data.mainDiv.TEXT.checklist;
                    checklist.forEach(check => {
                        const checkLi = document.createElement('li');
                        checkUl.appendChild(checkLi);

                        const list_ico = data.mainDiv.TEXT.list_ico; 
                        getSvg(list_ico)
                        .then(listIco => {
                                if(listIco !== null) {
                                    checkLi.innerHTML = `${listIco}<p>${check}</p>`;
                                }
                        });
                    });
            
            const formSub = document.createElement('form');
            formSub.classList.add('subscription');
            formSub.setAttribute('id','subs')
            subsSection.appendChild(formSub);

                const formLabel = document.createElement('label');
                formLabel.setAttribute('for', 'mail');
                formLabel.innerText = data.mainDiv.TEXT.form.label
                formSub.appendChild(formLabel);
                
                const errorSpan = document.createElement('span');
                errorSpan.classList.add('error');
                errorSpan.setAttribute('id', 'span-error');
                formLabel.appendChild(errorSpan);

                const formInput = document.createElement('input');
                formInput.type = data.mainDiv.TEXT.form.input.type;
                formInput.placeholder = data.mainDiv.TEXT.form.input.placeholder;
                formSub.appendChild(formInput);
                
                const formbtn = document.createElement('button');
                formbtn.type = data.mainDiv.TEXT.form.btn.type;
                formbtn.innerText = data.mainDiv.TEXT.form.btn.value;
                formSub.appendChild(formbtn);


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

        // ------ FORM SUBMIT ------ //

        const getMainDiv = document.getElementById('main')
        const getForm = document.getElementById('subs');
        const getInput = document.querySelector('input');
        const getError = document.getElementById('span-error');
        const getSection = document.getElementById('subs');

        getForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const mailValue = getInput.value;
            const isMail = regexMail.test(mailValue);

            function successMessage() {
                
                getError.innerText = "";
                getSection.style.display = "none"

                const successSection = document.createElement('section');
                successSection.classList.add('success-section');
                successSection.setAttribute('id', 'success-section')
                getMainDiv.appendChild(successSection);

                const successIcoDiv = document.createElement('div');
                successIcoDiv.classList.add('success-icon');
                successSection.appendChild(successIcoDiv);

                const successIco = data.mainDiv.TEXT.success.success_ico
                getSvg(successIco)
                .then((succIco) => {
                    successIcoDiv.innerHTML = succIco;
                });

                const successTextDiv = document.createElement('div');
                successTextDiv.classList.add('success-text');
                successSection.appendChild(successTextDiv);

                    const successH1 = document.createElement('h1');
                    successH1.innerText = data.mainDiv.TEXT.success.h1;
                    successTextDiv.appendChild(successH1);

                    const successPara = document.createElement('p')
                    successPara.innerHTML = data.mainDiv.TEXT.success.paragraph.replace('ash@loremcompany.com',`<strong>${mailValue}</strong>`)
                    successTextDiv.appendChild(successPara);

                const successBtn = document.createElement('button');
                successBtn.type = data.mainDiv.TEXT.success.btn.type;
                successBtn.innerText = data.mainDiv.TEXT.success.btn.value;
                successBtn.setAttribute('id','dismiss-btn')
                successSection.appendChild(successBtn)
                if(window.innerWidth > 720) {
                    body.classList.add('successBody')
                }

            }            
            if(mailValue.length !== 0) {
                switch(true) {
                    case !isMail:
                        getError.innerText = "Valid email required"
                    break;
                    case isMail:
                        successMessage();

                        const getDismissBtn = document.getElementById('dismiss-btn');
                        getDismissBtn.addEventListener('click', () => {
                            const formSectionIsNotDisplay = (getSection.style.display === 'none') ? true : false
                            if (formSectionIsNotDisplay) {
                                const getSuccessSection = document.getElementById('success-section')
                                getMainDiv.removeChild(getSuccessSection);
                                getSection.style.display = 'block'
                                body.classList.remove('successBody')
                            }
                        })
                    break;
                }
            } else {
                getError.innerText = "This field can't be empty"
            }
        })
    })
})