export function checkMail () {
    fetch('./ressources/data/style.json')
        .then(response => response.json())
        .then(style => {
            const input = document.getElementById('mail');
            const onClick = document.getElementById('check');
            
            const errorIco = document.getElementById('error_ico');
            const errorMsg = document.getElementById('error_message');
            const validMsg = document.getElementById('valid');
            
            const form = document.querySelector('form')
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // ------ STYLE ------ //
            const inputStyle = style.input;
            const submitBtnStyle = style.sbtBtn;
            const errorIcoStyle = style.error_ico;
            const errorMsgStyle = style.error_msg;
            const validMsgStyle = style.valid_msg;

            function toCheck(check) {
                switch (check) {
                    case true :
                        input.style = inputStyle.true;
                        if(window.innerWidth < 720) {
                            onClick.style = submitBtnStyle.true + "left : 72.5vw";
                        } else {
                            onClick.style = submitBtnStyle.true;
                        }
                        errorIco.style = errorIcoStyle.true;
                        errorMsg.style = errorMsgStyle.true;
                        validMsg.style = validMsgStyle.true;
                    break;
                    case false :
                        input.style = inputStyle.false;
                        if(window.innerWidth < 720) {
                            onClick.style = submitBtnStyle.false + "left:68.5vw";
                        } else {
                            onClick.style = submitBtnStyle.false;
                        }
                        errorIco.style = errorIcoStyle.false;
                        errorMsg.style = errorMsgStyle.false;
                        validMsg.style = validMsgStyle.false;
                    break;
                    default :
                        input.style = inputStyle.default;
                        onClick.style = submitBtnStyle.default;
                        errorIco.style = errorIcoStyle.default;
                        errorMsg.style = errorMsgStyle.default;
                        validMsg.style = validMsgStyle.default;
                    break;
                }
            }

            // ------ EVENT ------ //
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
            
                input.addEventListener('keypress', (e) => {
                    const key = (e?.key === 'Enter')
                    if(key) {
                        const mail = input.value;
                        const check = emailRegex.test(mail) ? true : false;
                        toCheck(check);
                    }
                })
            
            })
            onClick.addEventListener('click', () => {
                const mail = input.value;
                const check = emailRegex.test(mail) ? true : false;
                toCheck(check);
            })
        })
}