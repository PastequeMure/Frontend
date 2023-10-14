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
                
                const formAge = document.createElement('form');
                formAge.setAttribute('id', "age-form");
                mainDiv.appendChild(formAge);

                    for(let i = 0 ; i < data.mainDiv.form.length; i ++) {
                        const label = document.createElement('label');
                        label.setAttribute('id', data.mainDiv.form[i].label);
                        label.innerText = data.mainDiv.form[i].label;
                        formAge.appendChild(label);

                            const input = document.createElement('input');
                            input.setAttribute('id', `${data.mainDiv.form[i].label}-input`);
                            input.type = data.mainDiv.form[i].input.type;
                            input.placeholder = data.mainDiv.form[i].input.placeholder;
                            label.appendChild(input)

                            const span = document.createElement('span');
                            span.setAttribute('id', `${data.mainDiv.form[i].label}-span`);
                            label.appendChild(span)
                    };

                    async function GetSvg(url) {
                        try {
                            const responseSvg = await fetch(url);

                            if(responseSvg.ok) {
                                return await responseSvg.text()
                            } else {
                                throw new Error('svg-err')
                            }
                        } catch (err) {
                            console.error(err);
                            return null
                        }
                    }

                    const calcBtn = document.createElement('button');
                    calcBtn.classList.add('calculate');
                    calcBtn.setAttribute('id','calculate-btn')
                    GetSvg(data.mainDiv.arrow)
                    .then((svg) => {
                        if(svg !== null) {
                            calcBtn.innerHTML = svg      
                        }
                    })
                    formAge.appendChild(calcBtn);

                const resultsDiv = document.createElement('div');
                resultsDiv.classList.add('results');
                resultsDiv.setAttribute('id', 'results');
                mainDiv.appendChild(resultsDiv);
                
                    const results = data.mainDiv.results;
                    results.forEach(result => {
                        const resultsubDiv = document.createElement('div');
                        resultsDiv.appendChild(resultsubDiv);

                        const resultSpan = document.createElement('span');
                        resultSpan.setAttribute('id',result+"-value");
                        resultSpan.innerText = "--";
                        resultsubDiv.appendChild(resultSpan);
                        const resultH1 = document.createElement('h1');
                        resultsubDiv.appendChild(resultH1)                    
                    })

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


        // ------ CALCULATOR APP ------ //
        const getSbtBtn = document.getElementById('calculate-btn');
        const getForm = document.getElementById('age-form');
        getForm.addEventListener('submit', (event) => {
            event.preventDefault()

                // --- ERROR MESSAGES --- //
                const emptyError = data.mainDiv.errors.empty;
                const wholeError = data.mainDiv.errors.whole;
                const invalidError = data.mainDiv.errors.invalid;

                // --- GET USER TIME ZONE --- //
                const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                const today = new Date();
                const options = { timeZone: userTimeZone };
                // --- GET VALUE INPUT --- //
                const dayInputValue = document.getElementById('days-input').value
                const monthInputValue = document.getElementById('months-input').value
                const yearInputValue = document.getElementById('years-input').value
                // --- ALL CHECK DATE --- //

                    // FIELD EMPTY CHECK //
                    const getAllInputs = document.querySelectorAll('input');
                    let notEmpty;
                    let isValidMonth;
                    let isValidYear;
                    let isValidDay;

                        getAllInputs.forEach((input) => {
                            const spanName = input.id.replace('-input','-span');
                            const YEAR = new Date(today).getFullYear();
                            const MaxDayInMonth = new Date(yearInputValue,monthInputValue,0).getDate()
                            const getTargetSpan = document.getElementById(spanName);
                            notEmpty = (input.value > 0 && !isNaN(input.value)) ? true : false;
                            isValidMonth= (monthInputValue < 13 && notEmpty) ? true : false;
                            isValidDay = (dayInputValue <= MaxDayInMonth && notEmpty) ? true : false;
                            isValidYear = (yearInputValue <= YEAR && notEmpty) ? true : false;

                            if(notEmpty) {
                                getTargetSpan.innerText = "";

                                // VALID YEAR //
                                if(input.id === "years-input") {
                                    if(!isValidYear) {
                                        getTargetSpan.innerText = `${invalidError} year`
                                    } else {
                                        getTargetSpan.innerText = ""
                                    }
                                }
                                // VALID MONTH // 
                                if(input.id === "months-input") {
                                    if(!isValidMonth) {
                                        getTargetSpan.innerText = `${invalidError} month`;
                                    } else {
                                        getTargetSpan.innerText = "";
                                    }
                                }
                                // VALID DAY // 
                                if(input.id === "days-input") {
                                    if(!isValidDay) {
                                        getTargetSpan.innerText = `${invalidError} day`;
                                    } else {
                                        getTargetSpan.innerText = ""
                                    }
                                }
                            } else {
                                getTargetSpan.innerText = emptyError;
                                getTargetSpan.style.marginBottom= '0'
                            }
                        });
                    // CALCULATE AGE //
                    const fullValid = (notEmpty && isValidDay && isValidMonth && isValidYear) ? true : false;
                    const getYearResult = document.getElementById('years-value');
                    const getMonthResult = document.getElementById('months-value');
                    const getDayResult = document.getElementById('days-value');
                    console.log(getMonthResult,getYearResult,getDayResult)
                    if(fullValid) {
                        function calculateAge(birthDate, currentDate) {
                            const birthDateObj = new Date(birthDate);
                            const currentDateObj = new Date(currentDate);
                        
                            const timeDifference = currentDateObj - birthDateObj;
                        
                            const ageDate = new Date(timeDifference);
                            const years = ageDate.getUTCFullYear() - 1970;
                            const months = ageDate.getUTCMonth();
                            const days = ageDate.getUTCDate() - 1;
                        
                            return { years, months, days };
                        }
                        const inputDate = new Date(`${yearInputValue}-${monthInputValue}-${dayInputValue}`)
                        const age = calculateAge(inputDate, today);
                        const isNumber = (!isNaN(age.days) && !isNaN(age.months) && !isNaN(age.years)) ? true : false;
                        if(isNumber) {
                            const getYearSpan = document.getElementById('year-span');
                            if(age.years >= 0) {
                                getYearResult.innerText = age.years;
                                getMonthResult.innerText = age.months;
                                getDayResult.innerText = age.days;
                                getYearSpan.innerText = "";
                            } else {
                                getYearSpan.innerText = `${invalidError} year`;
                            }
                        } else {
                            getYearResult.innerText = "--";
                            getMonthResult.innerText = "--";
                            getDayResult.innerText = "--";
                        }
                    } else {
                        getYearResult.innerText = "--";
                        getMonthResult.innerText = "--";
                        getDayResult.innerText = "--";
                    }
        })

        
        // NUMBER ANIM //
        const getResultspan = document.querySelectorAll('.results div span');
        function startCounter(thisSpan,limit) {
            thisSpan.style.filter = "blur(1px) brightness(50%)"
            setTimeout(function() {
              let currentNumber = 0;
              let intervalDelay = 1700 / limit;
              const interval = setInterval(() => {
                if (currentNumber < limit) {
                  currentNumber++;
                  thisSpan.innerText = currentNumber.toString().padStart(2, '0');
                } else {
                  thisSpan.innerText = '--';
                  clearInterval(interval);
                  thisSpan.style.filter = 'none';
                }
              }, intervalDelay); 
            }, 2000);
          }
        getResultspan.forEach((span) => {
           let getLimit;
           if(span.id.includes('days')) {getLimit = 31}
           else if(span.id.includes("months")) {getLimit = 12}
           else {getLimit = 100}
           window.addEventListener('load', startCounter(span,getLimit));
        })

        // H1 ANIM //
        const getResultsH1 = document.querySelectorAll('.results div h1');
        function startWordDisplay(thisH1, mot) {
            setTimeout(function() {
                const intervalDelay = 1700;
                const uniqueLetters = Array.from(new Set(mot.toLowerCase()));
        
                let totalDuration = 0;
                let currentLetterIndex = 0;
        
                function displayNextLetter() {
                    const letter = uniqueLetters[currentLetterIndex];
                    let letterOccurrences = mot.toLowerCase().split(letter).length - 1;
                    const letterDuration = (intervalDelay / mot.length) * letterOccurrences;
        
                    const interval = setInterval(() => {
                        thisH1.textContent += letter;
                        letterOccurrences--;
        
                        if (letterOccurrences === 0) {
                            clearInterval(interval);
                            totalDuration += letterDuration;
        
                            if (currentLetterIndex < uniqueLetters.length - 1) {
                                currentLetterIndex++;
                                setTimeout(displayNextLetter, 0);
                            }
                        }
                    }, letterDuration);
                }
        
                displayNextLetter();
            }, 2000);
        }
    
        const words = ["years", "months", "days"];
        getResultsH1.forEach((h1, index) => {
           window.addEventListener('load', startWordDisplay(h1, words[index]));
        });
    })
})