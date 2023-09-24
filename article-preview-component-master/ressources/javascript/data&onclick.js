document.addEventListener('DOMContentLoaded', function() {
    fetch('./ressources/data/nav&foot.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de réseau');
        }
        return response.json();
      })
      .then(nav_foot => {
    
        return fetch('./ressources/data/data.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Erreur de réseau');
            }
            return response.json();
          })
          .then(data => {
            // ------ NAVBAR & FOOTER ------ //
            const body = document.body;
            const navbar = document.createElement('header');
            const footer = document.createElement('footer');
            navbar.classList.add('navbar');
            footer.classList.add('challenge');
            
            const navImgUrl = nav_foot.navbar.img.imgUrl;
            const navImgAlt = nav_foot.navbar.img.imgAlt;
            const navlinks = nav_foot.navbar.links;

            const imgParent = document.createElement('a');
            imgParent.href = "..";

            const img = document.createElement('img');
            img.src = navImgUrl;
            img.alt = navImgAlt;
            imgParent.appendChild(img);

            const Navul = document.createElement('ul');

            for(i=0; i < navlinks.length; i++) {
                const Navli = document.createElement('li');
                const navLiA = document.createElement('a');
                const navLiASpan = document.createElement('span')
                navLiA.href = navlinks[i].url;
                navLiA.target = navlinks[i].target;
                navLiASpan.innerText = navlinks[i].text;

                navLiA.appendChild(navLiASpan);
                Navli.appendChild(navLiA);
                Navul.appendChild(Navli)
            };
            const liBtn = document.createElement('li');
            liBtn.setAttribute('id', 'switch-btn');
            const switch_btn = document.createElement('button');
            switch_btn.innerText = "With js";

            liBtn.appendChild(switch_btn);
            Navul.appendChild(liBtn);

            navbar.appendChild(imgParent);
            navbar.appendChild(Navul);

            const footerP1 = nav_foot.footer.p[0];
            const footerP2 = nav_foot.footer.p[1];
            const footerChallengerUrl = nav_foot.footer.a.frontend.url;
            const footerChallengerTarget = nav_foot.footer.a.frontend.target;
            const footerChallengerText = nav_foot.footer.a.frontend.text;
            const footerDevUrl = nav_foot.footer.a.dev.url;
            const footerDevTarget = nav_foot.footer.a.dev.target;
            const footerDevText = nav_foot.footer.a.dev.text;

            const footerContains1 = document.createElement('p');
            const footerContains2 = document.createElement('p');
            const footerChallenger = document.createElement('a');
            const footerDev = document.createElement('a');

            footerContains1.innerText = footerP1;
            footerContains2.innerText = footerP2;
            
            footerChallenger.href = footerChallengerUrl,
            footerChallenger.target = footerChallengerTarget;
            footerChallenger.innerText = footerChallengerText;

            footerDev.href = footerDevUrl;
            footerDev.target = footerDevTarget;
            footerDev.innerText = footerDevText;

            footer.appendChild(footerContains1);
            footer.appendChild(footerChallenger);
            footer.appendChild(footerContains2);
            footer.appendChild(footerDev)

            // ------ DATA ------ //
            const headText = data.head;
            const subheadText = data.subhead;
            const avatarUrl = data.author.avatarUrl;
            const avatarAlt = data.author.name.replace(' ',"-").toLowerCase();
            const authorNameText = data.author.name;
            const authorDateText = data.author.date;
            const drawersUrl = data.img.imgUrl;
            const drawersAlt = data.img.imgAlt;

            const mainDiv = document.createElement('div')
            mainDiv.classList.add('main');

            const imgContainer = document.createElement('div');
            imgContainer.classList.add('imgContainer');
            const drawersImg = document.createElement('img')
            drawersImg.src = drawersUrl;
            drawersImg.alt = drawersAlt;
            imgContainer.appendChild(drawersImg);

            
            const dataContainer = document.createElement('div');
            dataContainer.classList.add('dataContainer');
            const head = document.createElement('h3')
            head.innerText = headText;
            const subhead = document.createElement('p');
            subhead.innerText = subheadText;
            const authorDiv = document.createElement('div');
            authorDiv.classList.add('author');
            const avatarImg = document.createElement('img');
            avatarImg.src = avatarUrl;
            avatarImg.alt = avatarAlt;
            avatarImg.classList.add('avatar');
            const nameDiv = document.createElement('div');
            const authorName = document.createElement('p');
            authorName.innerText = authorNameText;
            const authorDate = document.createElement('p');
            authorDate.innerText = authorDateText;
            nameDiv.appendChild(authorName);
            nameDiv.appendChild(authorDate);
            const shareIco = document.createElement('img');
            shareIco.src = data.icons[0].src;
            shareIco.alt = data.icons[0].name;
            shareIco.setAttribute('id', 'on');
            const shareLabel = document.createElement('label');
            shareLabel.setAttribute('id', 'labelOn');
            const inputCheck = document.createElement('input');
            inputCheck.setAttribute('id', 'checkbox');
            inputCheck.type = "checkbox";
            shareLabel.append(shareIco);


            authorDiv.appendChild(avatarImg);
            authorDiv.appendChild(nameDiv);
            authorDiv.appendChild(shareLabel);

            const shareContainer_js = document.createElement("div")
            shareContainer_js.classList.add('shareContainer_js');
            shareContainer_js.setAttribute('id', "shareContainer")
            const shareText_js = document.createElement('p');
            shareText_js.innerText = data.tooltip_data.toUpperCase();
            const icons = data.icons;
            const iconsUl = document.createElement('ul')
            const shareParent = document.createElement('li')
            shareParent.appendChild(shareText_js);
            iconsUl.appendChild(shareParent);
            for(i=0; i<icons.length; i++) {
                if(icons[i].name !== icons[0].name) {
                    const icoLi = document.createElement('li');
                    const icoA = document.createElement('a');
                    icoA.href = icons[i].web;
                    icoA.target = "_blank";
                    const icoASvg = document.createElement('img');
                    icoASvg.src = icons[i].src;
                    icoASvg.alt = icons[i].name;
    
                    icoA.appendChild(icoASvg);
                    icoLi.appendChild(icoA);
                    iconsUl.appendChild(icoLi);
                }
            }
            const shareLi = document.createElement('li');
            shareLi.classList.add('share')
            shareLi.setAttribute('id', "shareAfter")
            const shareSvg = document.createElement('img');
            shareSvg.src = data.icons[0].src;
            shareSvg.alt = data.icons[0].name;
            shareSvg.setAttribute('id', "off");

            shareLi.appendChild(shareSvg);
            iconsUl.appendChild(shareLi);
            shareContainer_js.appendChild(iconsUl);


            const shareContainer_css = document.createElement('div');
            shareContainer_css.classList.add('shareContainer_css');
            const shareText_css = document.createElement('p');
            shareText_css.innerText = data.tooltip_data.toUpperCase();
            const shareParent_css = document.createElement('li');
            const icons_css = data.icons;
            const iconsUl_css = document.createElement('ul');
            shareParent_css.appendChild(shareText_css);
            iconsUl_css.appendChild(shareParent_css)
            for(i=0; i<icons.length; i++) {
              if(icons_css[i].name !== icons_css[0].name) {
                const iconsLi_css = document.createElement('li');
                const iconsA_css = document.createElement('a');
                iconsA_css.href = icons_css[i].web;
                iconsA_css.target = "_blank";
                const iconsImg_css = document.createElement('img');
                iconsImg_css.src = icons_css[i].src;
                iconsImg_css.alt = icons_css[i].name;

                iconsA_css.appendChild(iconsImg_css);
                iconsLi_css.appendChild(iconsA_css);
                iconsUl_css.appendChild(iconsLi_css);
              }
            }
            const ShareLi_css = document.createElement('li');
            ShareLi_css.classList.add('share')
            const ShareLabel_css = document.createElement('label')
            ShareLabel_css.setAttribute('for', "checkbox");
            const ShareSvg_css = document.createElement('img');
            ShareSvg_css.src = icons_css[0].src;
            ShareSvg_css.alt = icons_css[0].name;
            ShareLabel_css.appendChild(ShareSvg_css);
            ShareLi_css.appendChild(ShareLabel_css);
            iconsUl_css.appendChild(ShareLi_css);
            shareContainer_css.appendChild(iconsUl_css);

            dataContainer.appendChild(inputCheck);
            dataContainer.appendChild(head);
            dataContainer.appendChild(subhead);
            dataContainer.appendChild(authorDiv);
            dataContainer.appendChild(shareContainer_css);
            dataContainer.appendChild(shareContainer_js);

            mainDiv.appendChild(imgContainer);
            mainDiv.appendChild(dataContainer);


            // ------ FINAL STEP ------ //
            body.appendChild(navbar)
            body.appendChild(mainDiv)
            body.appendChild(footer)

            // ------ ON CLICK ------ //
            const labelOn = document.getElementById('labelOn')
            const shareAfter = document.getElementById('shareAfter');

            if(window.innerWidth < 720) {
              labelOn.addEventListener('click', () => {
                  if(!labelOn.classList.contains('no')) {
                    shareContainer_js.classList.add('show');
                    shareContainer_js.style = "display:block";
                    authorDiv.style = "display:none";
                  }
              })

              shareAfter.addEventListener('click', () => {
                if(shareContainer_js.classList.contains('show')) {
                  shareContainer_js.classList.remove('show');
                  shareContainer_js.style = "display:none";
                  authorDiv.style="display:grid"
                }
              })
            } else {
              labelOn.addEventListener('click', () => {
                const labelImg = document.getElementById('on');
                if(shareContainer_js.classList.contains('show')) {
                  shareContainer_js.classList.remove('show');
                  shareContainer_js.style = "display:none";
                  labelImg.classList.remove('active');
                } else {
                    if(!labelOn.classList.contains('no')) {
                      shareContainer_js.classList.add('show');
                      shareContainer_js.style = "display:block";
                      labelImg.classList.add('active')
                    }
                }
              })
            }

            const SwitchBtn = document.getElementById('switch-btn');
            SwitchBtn.addEventListener('click', () => {
              if(!SwitchBtn.classList.contains('show_css')) {
                labelOn.classList.add('no');
                SwitchBtn.classList.add('show_css');
                shareLabel.setAttribute('for', 'checkbox')
                switch_btn.innerText = "With css"
              } else {
                labelOn.classList.remove('no')
                SwitchBtn.classList.remove('show_css')
                shareLabel.setAttribute('for', "")
                switch_btn.innerText = "With js"
              }
            })

          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

})