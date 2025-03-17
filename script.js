function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-content section');

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });

            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        })
    }

    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    function showItem(index) {
        const offset = -index * 110; 
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }, 4000);


 }
initTabNav()
