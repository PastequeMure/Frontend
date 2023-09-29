export function addData() {
    fetch('./ressources/data/data.json')
    .then(response => response.json())
    .then(data => {
        const BIGhead = document.head;
        const title = document.createElement('title');
        title.innerText = data.title;
        BIGhead.appendChild(title);

        const css = document.createElement('link')
        css.rel = "stylesheet";
        css.href = "./ressources/css/style.css";
        BIGhead.appendChild(css)

        const mainDiv = document.getElementById('main');

        const headDiv = document.createElement('div');
        headDiv.classList.add('head');
        mainDiv.appendChild(headDiv);

        const head = document.createElement('h1');
        head.innerText = data.head;
        headDiv.appendChild(head);

        const subhead = document.createElement('p');
        subhead.innerText = data.subhead;
        headDiv.appendChild(subhead);

        const formDiv = document.createElement('div');
        formDiv.classList.add('formDiv');
        mainDiv.appendChild(formDiv);

        const promoDiv = document.createElement('div');
        promoDiv.classList.add('promo');
        formDiv.appendChild(promoDiv);

        const promoData = data.promotion;
        const divisionWord = 'days';
        const posWord = promoData.indexOf(divisionWord);
        let innerP;
        let innerSpan;
        if(posWord !== -1) {
            innerP = promoData.substring(0, posWord + divisionWord.length);
            innerSpan = promoData.substring(posWord + divisionWord.length);
        }
        const promo = document.createElement('p');
        promo.innerText = innerP;
        promoDiv.appendChild(promo);

        const promoSpan = document.createElement('span');
        promoSpan.innerText = innerSpan;
        promo.appendChild(promoSpan);

        const form = document.createElement('form');
        form.setAttribute('id','login-form');
        formDiv.appendChild(form);

        const inputs = data.inputs;
        inputs.forEach(input => {
            const idName = input.placeholder.replaceAll(' ','-').toLowerCase();
            const inputForm = document.createElement('input');
            inputForm.type = input.type;
            inputForm.placeholder = input.placeholder;
            inputForm.required = true;
            inputForm.setAttribute('id', idName);

            const inputLabel = document.createElement('label');
            inputLabel.appendChild(inputForm);
            form.appendChild(inputLabel);


            // const ico = document.createElement('img');
            // ico.src = data.error_ico.src;
            // ico.alt = data.error_ico.alt;
            // inputLabel.appendChild(ico);

            // let spanInnerText
            // if(input.placeholder === "Email Address") {
            //     spanInnerText = "Looks like this is not an email"
            // } else {
            //     spanInnerText = input.placeholder + " cannot be empty"
            // }
            // const spanInput = document.createElement('span');
            // spanInput.innerText = spanInnerText;
            // inputLabel.appendChild(spanInput)
        });

        const Btn = document.createElement('button');
        Btn.innerText = data.btn;
        form.appendChild(Btn);

        const termsText = data.terms
        const divisionTerm = 'Terms';
        const posTerm = termsText.indexOf(divisionTerm);
        
        let innerTerm;
        let innerPTerm;
        
        if (posTerm !== -1) {
            innerTerm = termsText.substring(0, posTerm);
            innerPTerm = termsText.substring(posTerm);
        }

        const terms = document.createElement('p');
        terms.innerText = innerTerm
        form.appendChild(terms);

        const pTermA = document.createElement('a')
        pTermA.href= "#"
        terms.appendChild(pTermA);

        const pTerm = document.createElement('span');
        pTerm.innerText = innerPTerm;
        pTermA.appendChild(pTerm);

        const getSwitch = document.getElementById('switch-btn');
        const getInputs = document.querySelectorAll('input');
        const isMailInput = Array.from(getInputs).find(input => input.id ===  "email-address");
        const FirstName = Array.from(getInputs).find(input => input.id === "first-name");
        const LastName = Array.from(getInputs).find(input => input.id === "last-name");
        const Password  = Array.from(getInputs).find(input => input.id === "password")
        const getLabels = document.querySelectorAll('label');
        const labelName = Array.from(data.inputs);


        getSwitch.addEventListener('click', () => {
            const SwitchHasShowJs = getSwitch.classList.contains('show_js');

            if(SwitchHasShowJs) {
                getSwitch.innerText = "With css";
                getSwitch.classList.remove('show_js')
                isMailInput.type = "email"
                getInputs.forEach(input => {
                    input.required = true;
                })
                for(let i = 0; i < getLabels.length; i++) {
                    const getIco = document.getElementById(`error_ico-${i+1}`)
                    getLabels[i].removeChild(getIco);

                    const getLabelSpan = document.getElementById(`error_span-${i+1}`)
                    getLabels[i].removeChild(getLabelSpan)
                }

            } else {
                getSwitch.classList.add('show_js')
                getSwitch.innerText = "With JS";
                isMailInput.type = 'text';
                getInputs.forEach(input => {
                    input.required = false
                })
                for(let i = 0; i < getLabels.length; i++) {
                    const isMailLabel = labelName[i].placeholder === "Email Address" ? true : false;

                    const ico = document.createElement('img');
                    ico.alt = data.error_ico.alt;
                    ico.src = data.error_ico.src;
                    ico.setAttribute('id', `error_ico-${i+1}`);
                    getLabels[i].appendChild(ico);

                    const spanLabel = document.createElement('span');
                    spanLabel.setAttribute('id', `error_span-${i+1}`)
                    if(!isMailLabel) {
                        spanLabel.innerText = data.inputs[i].placeholder + " cannot be empty";
                    } else {
                        spanLabel.innerText = "Looks like this is not an email";
                    }
                    getLabels[i].appendChild(spanLabel)
                }
                
            }
        })

        const getForm = document.getElementById('login-form');
        getForm.addEventListener('submit', (sbt) => {
            sbt.preventDefault();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const mailValue = isMailInput.value;
            const firstnameValue = FirstName.value;
            const lastnameValue = LastName.value;
            const passwordValue = Password.value;

            const checkMail = emailRegex.test(mailValue) ? true : false;
            const isValidFirstName = firstnameValue.length > 0 ? true : false;
            const isValidLastName = lastnameValue.length > 0 ? true : false;
            const isValidPassword = passwordValue.length > 0 ? true: false;

            const showSuccess = isValidFirstName === true && isValidLastName === true && checkMail === true && isValidPassword === true

            for(let i=0; i < getInputs.length; i++) {
                const spanToshow = document.getElementById(`error_span-${i+1}`);
                const icoToShow = document.getElementById(`error_ico-${i+1}`);

                if(getInputs[i].id !== "email-address") {
                    const getInputValue = getInputs[i].value;
                    const isValidValue = getInputValue.length > 0 ? true : false;
                    if(!isValidValue) {
                        spanToshow.classList.add('active');
                        icoToShow.classList.add('active');
                        getInputs[i].style.borderColor = 'hsl(0, 100%, 74%)';
                    } else {
                        spanToshow.classList.remove('active');
                        icoToShow.classList.remove('active');
                    }
                } else {
                    if(!checkMail) {
                        spanToshow.classList.add('active');
                        icoToShow.classList.add('active');
                        getInputs[i].style.borderColor = 'hsl(0, 100%, 74%)';
                    } else {
                        spanToshow.classList.remove('active');
                        icoToShow.classList.remove('active')
                    }
                }
            }

            if(showSuccess) {
                for(let i=0; i < getLabels.length; i++) {
                    getLabels[i].removeChild(getInputs[i]);
                    getForm.removeChild(getLabels[i]);
                };
                const getSbtBtn = document.querySelector('form button');
                getForm.removeChild(getSbtBtn);

                const getTerms = document.querySelector('form p');
                getForm.removeChild(getTerms);

                const successMessage = document.createElement('h3');
                successMessage.classList.add('scam');
                successMessage.innerText = `YEAH ! Welcome to our scam ${firstnameValue} ${lastnameValue} !! There is no free trial 😈`;
                getForm.appendChild(successMessage);
            }

        })
    })
}