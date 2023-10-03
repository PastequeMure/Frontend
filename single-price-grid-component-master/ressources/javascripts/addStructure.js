export function addStructure() {
    fetch('./ressources/data/nav&foot.json')
    .then(response => response.json())
    .then(data => {
        const body = document.body;
        const NavData = data.navbar;

        // ------ NAVBAR ------ //
        const NAVBAR = document.createElement('header');
        NAVBAR.classList.add('navbar');
        body.appendChild(NAVBAR);

        const Home = document.createElement('a');
        Home.href = "..";
        NAVBAR.appendChild(Home);

        const HomeImg = document.createElement('img');
        HomeImg.src = NavData.img.imgUrl;
        HomeImg.alt = NavData.img.imgAlt;
        Home.appendChild(HomeImg);

        const NavUl = document.createElement('ul');
        NAVBAR.appendChild(NavUl);

        const links = NavData.links;

        links.forEach(link => {
            const NavLi = document.createElement('li');
            NavUl.appendChild(NavLi);

            const NavLiA = document.createElement('a');
            NavLiA.href = link.url;
            NavLiA.target = link.target;
            NavLi.appendChild(NavLiA);

            const linkSpan = document.createElement('span');
            linkSpan.innerText = link.text;
            NavLiA.appendChild(linkSpan);
        })

        // ------ MAIN  ------ //
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('main');
        mainDiv.setAttribute('id','main');
        body.appendChild(mainDiv);

        // ------ FOOTER ------ //
        const footData = data.footer;
        const FOOTER = document.createElement('footer');
        FOOTER.classList.add('challenge');
        body.appendChild(FOOTER);

        const firstP = document.createElement('p')
        firstP.innerText = footData.p[0];
        FOOTER.appendChild(firstP);

        const frontend = footData.frontend;
        const challengerA = document.createElement('a');
        challengerA.href = frontend.url;
        challengerA.target = frontend.target;
        challengerA.innerText = frontend.text;
        FOOTER.appendChild(challengerA);

        const secondP = document.createElement('p');
        secondP.innerText = footData.p[1];
        FOOTER.appendChild(secondP);
        
        const dev = footData.dev;
        const devA = document.createElement('a');
        devA.href = dev.url;
        devA.target = dev.target;
        devA.innerText = dev.text;
        FOOTER.appendChild(devA)
    })
}