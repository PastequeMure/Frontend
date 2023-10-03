export function addData() {
    fetch('./ressources/data/data.json')
    .then(response => response.json())
    .then(data => {
        const BIGhead = document.head;
        const mainDiv = document.getElementById('main');

        const title = document.createElement('title');
        title.innerText = data.title;
        BIGhead.appendChild(title);

        // ------ HEAD ------ //

        const head = data.mainDiv.head;

        const headDiv = document.createElement('div');
        headDiv.classList.add('head');
        mainDiv.appendChild(headDiv);


        const firstHead = document.createElement('h1');
        firstHead.innerText = head.firstHead;
        headDiv.appendChild(firstHead);

        const subhead = document.createElement('h2');
        subhead.innerText = head.subhead;
        headDiv.appendChild(subhead);

        const headP = document.createElement('p');
        headP.innerText = head.paragraph;
        headDiv.appendChild(headP);

        // ------ DATA ------ //

        const dataDiv = document.createElement('div');
        dataDiv.classList.add('main_body');
        mainDiv.appendChild(dataDiv)

        // ------ SUBSCRIPTION ------ //
        const subscription = data.mainDiv.subscription;

        const subDiv = document.createElement('div');
        subDiv.classList.add('subscription');
        dataDiv.appendChild(subDiv);

        const subscription_Head = document.createElement('h2');
        subscription_Head.innerText = subscription.head;
        subDiv.appendChild(subscription_Head);

        const splitPrice = subscription.price.split(" ");
        const PRICE = splitPrice.find(word => word[0]);

        const subPrice = document.createElement('h1');
        subPrice.innerText = PRICE;
        subDiv.appendChild(subPrice);
        
        const restPrice = splitPrice.filter(word => word !== PRICE).toString().replace(/,/g," ");
        const restPriceSpan = document.createElement('span');
        restPriceSpan.innerText = restPrice;
        subPrice.appendChild(restPriceSpan);

        const subP = document.createElement('p');
        subP.innerText = subscription.paragraph;
        subDiv.appendChild(subP);

        const SignUpBtn = document.createElement('button');
        SignUpBtn.type = "button";
        SignUpBtn.setAttribute('id',"signupBtn");
        SignUpBtn.innerText = subscription.btn;
        subDiv.appendChild(SignUpBtn);

        // ------ ABOUT US ------ //
        const explain = data.mainDiv.explain;

        const explainDiv = document.createElement('div');
        explainDiv.classList.add('about_us');
        dataDiv.appendChild(explainDiv);

        const explainHead = document.createElement('h1');
        explainHead.innerText = explain.head;
        explainDiv.appendChild(explainHead);

        const explainP = document.createElement('p');
        explainP.innerText = explain.paragraph;
        explainDiv.appendChild(explainP);

    })
}