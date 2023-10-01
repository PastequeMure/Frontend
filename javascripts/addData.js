export function addData() {
    fetch('./data/dirList.json')
    .then(response => response.json())
    .then(data => {
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
    })
}