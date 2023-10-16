import { getSvg } from "./getSvg.js"

document.addEventListener('DOMContentLoaded', () => {
    fetch('./ressources/data/data.json')
    .then(response => response.json())
    .then(data => {

        const documentHead = document.head;
        const documentBody = document.body;
        console.log(documentBody)
        // ------ HEAD ------ //
        const favicon = document.createElement('link');
        favicon.rel = "icon",
        favicon.type = "image/png";
        favicon.sizes = "32x32";
        favicon.href = data.favIcon;
        documentHead.appendChild(favicon);

        const title = document.createElement('title');
        title.innerText = data.title;
        documentHead.appendChild(title);

        // ------ BODY ------ //

            // --- MENU --- //
            const menu = document.createElement('header');
            menu.classList.add('nav-menu');
            documentBody.appendChild(menu);

                // - LOGO - //
                const logoDiv = document.createElement('div');
                logoDiv.classList.add('logo');
                menu.appendChild(logoDiv);

                getSvg(data.header.logo)
                .then(svg => {
                    if(svg !== null);
                        logoDiv.innerHTML = svg
                });

                // - NAV LINKS - //

                    // LARGE SCREEN ITEMS //
                    const menuUl = document.createElement('ul');
                    menuUl.classList.add('large','nav-links');
                        // LI //
                        const navItems = data.header.links;
                        for (let i = 0; i < navItems.length; i++) {
                            const menuLi = document.createElement('li');
                            menuLi.innerText = navItems[i];
                            menuUl.appendChild(menuLi);
                        };

                    // SMALL SCREEN ITEMS //
                    const smallMenuDiv = document.createElement('div');
                    smallMenuDiv.classList.add('small-menu');
                        // ICON //
                        const menuIcon = document.createElement('label')
                        menuIcon.setAttribute('id','menu-checkbox');
                        smallMenuDiv.appendChild(menuIcon);
                            // GET MENU ICON //
                            getSvg(data.header.menu_ico)
                            .then(svg => {
                                if(svg !== null) {
                                    menuIcon.innerHTML = svg
                                }
                            })

                        // MENU ELEMENTS //
                        const menuAside = document.createElement('aside');
                        menuAside.classList.add('menu-mobile');
                        smallMenuDiv.appendChild(menuAside)

                            // CLOSE //

                            const closeLabel = document.createElement('label');
                            closeLabel.setAttribute('id','menu-close');
                            menuAside.appendChild(closeLabel)

                                // GET CLOSE ITEM //
                                getSvg(data.header.menu_close_ico)
                                .then(svg => {
                                    if(svg !== null) {
                                        closeLabel.innerHTML = svg
                                    }
                                })

                            // NAV LINKS //
                            const asideUl = document.createElement('ul');
                            asideUl.classList.add('small','nav-links');
                            menuAside.appendChild(asideUl);
                                // NAV ITEMS //
                                for(let i = 0; i < navItems.length; i++) {
                                    const asideLi = document.createElement('li');
                                    asideLi.innerText = navItems[i];
                                    asideUl.appendChild(asideLi);
                                };

                menu.appendChild(menuUl)
                menu.appendChild(smallMenuDiv)

                // BID DIV //
                const BIGDIV = document.createElement('div');
                BIGDIV.classList.add('BIG');
                documentBody.appendChild(BIGDIV);
                    // --- MAIN ARTICLE --- //
                    const mainArticleDiv = document.createElement('div');
                    mainArticleDiv.classList.add('main','article');
                    BIGDIV.appendChild(mainArticleDiv);

                        // IMAGES //
                            const heroContainer = document.createElement('div');
                            heroContainer.classList.add('hero-container');
                            mainArticleDiv.appendChild(heroContainer)
                            // LARGE HERO //
                                const largeHero = document.createElement('img');
                                largeHero.classList.add('large','hero');
                                largeHero.src = data.MainArticle.hero.desk;
                                largeHero.alt = data.MainArticle.hero.desk.split("/").pop().replace(/.[^.]+$/, '');

                            // SMALL HERO //
                                const smallHero = document.createElement('img');
                                smallHero.classList.add('small','hero');
                                smallHero.src = data.MainArticle.hero.mobile;
                                smallHero.alt = data.MainArticle.hero.mobile.split('/').pop().replace(/.[^.]+$/, '');

                        // DETAILS DIV //
                        const detailMainDiv = document.createElement('div');
                        detailMainDiv.classList.add('details');
                        mainArticleDiv.appendChild(detailMainDiv)
                            // TITLE //
                            const mainArticleH1 = document.createElement('h1');
                            mainArticleH1.innerText = data.MainArticle.h1;
                            detailMainDiv.appendChild(mainArticleH1);

                            const pButton = document.createElement('div');
                            pButton.classList.add('paragraph');
                            detailMainDiv.appendChild(pButton);

                                // PARAGRAPH //
                                const mainArticleP = document.createElement('p');
                                mainArticleP.innerText = data.MainArticle.paragraph;
                                pButton.appendChild(mainArticleP);

                                // BUTTON //
                                const mainArticleBtn = document.createElement('button');
                                mainArticleBtn.type = data.MainArticle.button.type;
                                mainArticleBtn.innerText = data.MainArticle.button.text;
                                pButton.appendChild(mainArticleBtn);

                    // --- NEWS --- //
                    const newsDiv = document.createElement('div');
                    newsDiv.classList.add('news','article');
                    BIGDIV.appendChild(newsDiv);

                            // TITLE //
                            const newsTitle = document.createElement(('h1'));
                            newsTitle.innerText = data.News.h1;
                            newsDiv.appendChild(newsTitle);
                                
                            // DETAILS //
                            const newsItem = data.News.items;
                            newsItem.forEach(item => {
                                // ITEM DIV //
                                const itemDiv = document.createElement('div');
                                itemDiv.classList.add('article','news-article');
                                newsDiv.appendChild(itemDiv);

                                    // ITEM TITLE //
                                    const itemTitle = document.createElement("h2");
                                    itemTitle.innerText = item.h2;
                                    itemDiv.appendChild(itemTitle);

                                    // ITEM PARAGRAPH //
                                    const itemP = document.createElement('p');
                                    itemP.innerText = item.paragraph;
                                    itemDiv.appendChild(itemP);
                            })
                        
                // --- IMAGE ARTICLE --- // 
                const articles = document.createElement('div');
                articles.classList.add('article','image-article');
                documentBody.appendChild(articles);
                    
                        const articlesImages = data.articles;
                        for(let i=0; i< articlesImages.length; i++) {
                            // ARTICLE DIV //
                            const article = document.createElement('div');
                            article.classList.add('article','image-article-child');
                            articles.appendChild(article);

                                // IMAGE //
                                const imgContainer = document.createElement('div');
                                imgContainer.classList.add('img-container');
                                article.appendChild(imgContainer);

                                    const image = document.createElement('img');
                                    image.src = articlesImages[i].image;
                                    image.alt = articlesImages[i].image.split('/').pop().replace(/.[^.]+$/, '');
                                    imgContainer.appendChild(image);

                                // DETAILS DIV //
                                const detailsDiv = document.createElement('div');
                                detailsDiv.classList.add('article','details');
                                article.appendChild(detailsDiv);

                                    // NUMBER //
                                    const number = document.createElement('h2');
                                    number.innerText = `0${i + 1}`;
                                    detailsDiv.appendChild(number);

                                    // TITLE //
                                    const title = document.createElement('h3');
                                    title.innerText = articlesImages[i].h3;
                                    detailsDiv.appendChild(title);

                                    // PARAGRAPH // 
                                    const paragraph = document.createElement('p');
                                    paragraph.innerText = articlesImages[i].paragraph;
                                    detailsDiv.appendChild(paragraph);
                        };

            // --- FOOTER --- //
                const footerDiv = document.createElement('footer');
                footerDiv.classList.add("challenge");
                documentBody.appendChild(footerDiv);

                    const firstP = document.createElement('p');
                    firstP.innerText = data.footer.p[0];
                    footerDiv.appendChild(firstP);

                    const challenger = document.createElement('a');
                    challenger.href = data.footer.chall.href;
                    challenger.target ='_blank';
                    challenger.innerText = data.footer.chall.text;
                    footerDiv.appendChild(challenger);

                    const secondP = document.createElement('p');
                    secondP.innerText = data.footer.p[1];
                    footerDiv.appendChild(secondP);

                    const dev = document.createElement('a');
                    dev.href = data.footer.dev.href;
                    dev.target = '_blank';
                    dev.innerText = data.footer.dev.text;
                    footerDiv.appendChild(dev);

                // GET SCREEN WIDTH WITH REZISE //
                function GetScreenWidth() {

                    const getMenu = document.querySelector('header');
                    const getLargeUl = document.querySelector('.large');
                    const getSmallMenu = document.querySelector('.small-menu');
                    const getHeroContainer = document.querySelector('.hero-container');
                    const getHero = document.querySelector('.hero');

                    const isLargeMenu = (getMenu.contains(getLargeUl)) ? true : false;
                    const isSmallMenu = (getMenu.contains(getSmallMenu)) ? true : false;

                    const getOpenMenu = document.getElementById('menu-checkbox');
                    const getCloseMenu = document.getElementById('menu-close');
                    const getAsideMenu = document.querySelector('.menu-mobile');
    
                    if(window.innerWidth < 720) {
                        if(getHero !== null) {
                            getHeroContainer.removeChild(getHero);
                            getHeroContainer.appendChild(smallHero);
                        } else {
                            getHeroContainer.appendChild(smallHero);
                        }

                        if(isLargeMenu) {
                            getMenu.removeChild(getLargeUl);
                            getMenu.appendChild(smallMenuDiv);
                        } else {
                            getMenu.appendChild(smallMenuDiv);
                        };

                        getOpenMenu.addEventListener('click' , () => {
                            getAsideMenu.style.display = "block"
                        })
                        getCloseMenu.addEventListener('click', () => {
                            getAsideMenu.style.display ="none"
                        })

                    } else {
                        if(getHero !== null) {
                            getHeroContainer.removeChild(getHero);
                            getHeroContainer.appendChild(largeHero);
                        } else {
                            getHeroContainer.appendChild(largeHero);
                        }
                        if(isSmallMenu) {
                            getMenu.removeChild(getSmallMenu);
                            getMenu.appendChild(menuUl);
                        } else {
                            getMenu.appendChild(menuUl);
                        }
                    }
                }
                GetScreenWidth();
                window.addEventListener('resize', GetScreenWidth);

                const getLogo = document.querySelector('.logo');
                getLogo.addEventListener('click', () => {
                    window.location.href = ".."
                })
    })
})