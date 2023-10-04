document.addEventListener('DOMContentLoaded', () => {
    fetch('./ressources/data/data.json')
    .then(response => response.json())
    .then(data => {
        const BIGhead = document.head;
        const body = document.body;

        // ------ TITLE ------ //
        const title = document.createElement('title');
        title.innerText = data.title;
        BIGhead.appendChild(title);

        // ------ NAVBAR ------ //
        const NAVBAR = document.createElement('header');
        NAVBAR.classList.add('navbar');
        body.appendChild(NAVBAR);

        const HomeA = document.createElement('a')
        HomeA.href = "..";
        NAVBAR.appendChild(HomeA);

        const HomeImg = document.createElement('img');
        HomeImg.src = data.navbar.img.imgUrl;
        HomeImg.alt = data.navbar.img.imgAlt;
        HomeA.appendChild(HomeImg);

        const NavUl = document.createElement('ul');
        NAVBAR.appendChild(NavUl);

        const links = data.navbar.links;

        links.forEach(link => {
            const NavLi = document.createElement('li');
            NavUl.appendChild(NavLi);

            const NavLiA = document.createElement('a');
            NavLiA.href = link.url;
            NavLiA.target = link.target;
            NavLi.appendChild(NavLiA);

            const NavLiASpan = document.createElement('span');
            NavLiASpan.innerText = link.text;
            NavLiA.appendChild(NavLiASpan);
        });

        // ------ MAIN DIV ------ //

        const mainDiv = document.createElement('div');
        mainDiv.classList.add('main');
        mainDiv.setAttribute('id', 'main');
        body.appendChild(mainDiv);

            // --- LOGO --- //
            const logo = document.createElement('img');
            logo.src = data.mainDiv.logo;
            logo.alt = data.mainDiv.logo.replaceAll(/\./g, '-').split('/').filter(word => /\.[^.]+$/.test(word))
            mainDiv.appendChild(logo);

            // --- HEAD --- //
            const headDiv = document.createElement('div');
            headDiv.classList.add('head');
            mainDiv.appendChild(headDiv);

                // H1 //
                const HeadH1 = document.createElement('h1');
                HeadH1.innerText = data.mainDiv.head.h1.split(' ').filter(word => word !== 'soon!').toString().replace(/\,/g, ' ');
                headDiv.appendChild(HeadH1);

                const Soon = document.createElement('span');
                Soon.innerText = data.mainDiv.head.h1.split(' ').filter(word => word === 'soon!').toString();
                HeadH1.appendChild(Soon)

                // H2 //
                const HeadH2 = document.createElement('p');
                HeadH2.innerText = data.mainDiv.head.h2;
                headDiv.appendChild(HeadH2);
            
            // --- FORM DIV --- //
            const formDiv = document.createElement('div');
            formDiv.classList.add('formDiv');
            mainDiv.appendChild(formDiv);

                // - FORM - //
                const form = document.createElement('form');
                form.setAttribute('id','subForm');
                formDiv.appendChild(form);

                    // INPUT //
                    const labelInput = document.createElement('label');
                    labelInput.setAttribute('id','mailInput');
                    form.appendChild(labelInput);

                    const input = document.createElement('input');
                    input.setAttribute('id','mail');
                    input.type = 'text';
                    input.placeholder = data.mainDiv.form.input;
                    labelInput.appendChild(input);

                    // BUTTON //
                    const sbtBtn = document.createElement('button');
                    sbtBtn.setAttribute('id', 'sbtBtn')
                    sbtBtn.type = data.mainDiv.form.btn.type;
                    sbtBtn.innerText = data.mainDiv.form.btn.text;
                    form.appendChild(sbtBtn);
            
            // --- ILLLUSTRATION --- //
            const illustration = document.createElement('img');
            illustration.classList.add('illustration');
            illustration.src = data.mainDiv.illustration;
            illustration.alt = data.mainDiv.illustration.split('/').filter(word => /\.[^.]+$/.test(word)).toString().replace(/\./g, '-');
            mainDiv.appendChild(illustration);

            // --- FOOT --- //
            const footDiv = document.createElement('div');
            footDiv.classList.add('foot');
            mainDiv.appendChild(footDiv);

                // - SOCIALS - //
                const socialsUl = document.createElement('ul');
                footDiv.appendChild(socialsUl);

                    // SOCIALS LOGO //
                    const socialsData = data.mainDiv.foot.socials;
                    socialsData.forEach(social => {
                        const socialLi = document.createElement('li');
                        socialsUl.appendChild(socialLi);

                        const socialLiA = document.createElement('a');
                        const getHref = social.split('/').filter(word => /\.[^.]+$/.test(word)).toString().replace(/\.[^.]+$/, '')
                        socialLiA.href = `https://${getHref}.com/`;
                        socialLiA.target = "_blank";
                        socialLi.appendChild(socialLiA);

                        const logo = document.createElement('img');
                        logo.src = social
                        logo.alt = social.split('/').filter(word => /\.[^.]+$/.test(word)).toString().replace(/\./g,'-');
                        socialLiA.appendChild(logo);
                    });

                // - PARAGRAPH - //
                const footP = document.createElement('p');
                footP.innerText = data.mainDiv.foot.paragraph;
                footDiv.appendChild(footP);


        // ------ FOOTER ------ //
        const FOOTER = document.createElement('footer')
        FOOTER.classList.add('challenge');
        body.appendChild(FOOTER);

        const firstP = document.createElement('p');
        firstP.innerText = data.footer.p[0];
        FOOTER.appendChild(firstP);

        const frontend = document.createElement('a');
        frontend.href = data.footer.frontend.url;
        frontend.target = data.footer.frontend.target;
        frontend.innerText = data.footer.frontend.text;
        FOOTER.appendChild(frontend);

        const secondP = document.createElement('p');
        secondP.innerText = data.footer.p[1];
        FOOTER.appendChild(secondP);

        const dev = document.createElement('a');
        dev.href = data.footer.dev.url;
        dev.target = data.footer.dev.target;
        dev.innerText = data.footer.dev.text;
        FOOTER.appendChild(dev);

        // ------ EVENT LISTENER ------ //
        const getForm = document.getElementById('subForm');
        const getLabel = document.getElementById('mailInput');
        const getInput = document.getElementById('mail');

        getForm.addEventListener('submit', (sbt) => {
            sbt.preventDefault()
            const getInputValue = document.getElementById('mail').value;
            const IsMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getInputValue);

            // error span //
            const errorSpan = document.createElement('span');
            errorSpan.innerText = "Please provide a valid email address";
            errorSpan.setAttribute('id','error');

            // success span //
            const successSpan = document.createElement('span');
            successSpan.innerText = "Yeah ! It's a valid email !!";
            successSpan.style.color = "hsl(223, 87%, 63%)";


            switch (true) {
                case !IsMail && !getForm.classList.contains('error'):
                    getForm.classList.add('error');
                    getLabel.appendChild(errorSpan);
    
                    getInput.style.borderColor = "hsl(354, 100%, 66%)";
                    getInput.style.transition ="all 0.5s ease"
                break;
                case IsMail && getForm.classList.contains('error'):
                    getForm.classList.remove('error');
                    const getErrorSpan = document.getElementById('error');
                    getLabel.removeChild(getErrorSpan);
                    getLabel.appendChild(successSpan)

                    getInput.disabled = true
                    getInput.style.borderColor = "hsl(223, 100%, 88%)";
                    getInput.style.transition = "all 0.5s ease";
                break;
                case IsMail && !getForm.classList.contains('error'):
                    getLabel.appendChild(successSpan);
                    getInput.disabled = true;
                default:
                    
                break;
            }
        })
    })
})