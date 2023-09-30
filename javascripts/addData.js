export function addData() {
    fetch('./data/dirList.json')
    .then(response => response.json())
    .then(data => {
        const cardDiv = document.getElementById('card');
        
        for(let i = 0; i < data.length; i++) {
            const ChallengeA = document.createElement('a');
            ChallengeA.href = `/${data[i]}`;
            ChallengeA.innerText = `#${i+1} ${data[i]}`;
            cardDiv.appendChild(ChallengeA)
        }
    })
}