document.addEventListener('DOMContentLoaded', () => {
    fetch('./data/nav&foot.json')
    .then(response => response.json())
    .then(structure => {
        fetch('./data/dirList.json')
        .then(response => response.json())
        .then(data => {
            const body = document.body;
            // ------ NAVBAR ------ //
            const NAVBAR = document.createElement('header')
            NAVBAR.classList.add('navbar');
            body.appendChild(NAVBAR);
    
            const navImg = structure.navbar.img;
            const navChallenge = structure.navbar.frontend;
    
            const HomeA = document.createElement('a');
            HomeA.href = "..";
            NAVBAR.appendChild(HomeA);
    
            const HomeImg = document.createElement('img');
            HomeImg.src = navImg.imgUrl;
            HomeImg.alt = navImg.imgAlt;
            HomeA.appendChild(HomeImg);
    
            const NavChallenger = document.createElement('a');
            NavChallenger.href = navChallenge.url;
            NavChallenger.target = navChallenge.target;
            NavChallenger.innerText = navChallenge.text;
            NavChallenger.classList.add('frontend');
            NAVBAR.appendChild(NavChallenger); 
    
            // ------ MAIN DIV ------ //

            const mainDiv = document.createElement('div');
            mainDiv.classList.add('card');
            mainDiv.setAttribute('id','card')
            body.appendChild(mainDiv);

            const cardDiv = document.getElementById('card');
        
            for(let i = 0; i < data.length; i++) {
                const ChallengeA = document.createElement('a');
                ChallengeA.href = `./${data[i]}`;
                cardDiv.appendChild(ChallengeA)
    
                const challengeDiv = document.createElement('div');
                ChallengeA.appendChild(challengeDiv);
    
                const imgA = document.createElement('img');
                imgA.src = `./screenshots/${data[i]}.png`;
                imgA.alt = data[i];
                challengeDiv.appendChild(imgA);
    
                const pChallenge = document.createElement('p');
                pChallenge.innerText = `#${i+1} ${data[i]}`;
                challengeDiv.appendChild(pChallenge)
    
            }
    
            // ------ FOOTER ------ //

            const FOOTER = document.createElement('footer')
            FOOTER.classList.add('challenge');
            body.appendChild(FOOTER)
    
            const p = document.createElement('p');
            p.innerText = structure.footer.p;
            FOOTER.appendChild(p);
    
            const dev = document.createElement('a');
            dev.href = structure.footer.dev.url;
            dev.target = structure.footer.dev.target;
            dev.innerText = structure.footer.dev.text;
            dev.classList.add('pasteque');
            p.appendChild(dev);
        })
    })
})