
      const menuButton = document.getElementById('menuButton');
        const subMenu = document.getElementById('subMenu');
        const supportHeader = document.getElementById('supportHeader');
        const supportContent = document.getElementById('supportContent');
        const supportChevron = document.getElementById('supportChevron');
        const socialHeader = document.getElementById('socialHeader');
        const socialContent = document.getElementById('socialContent');
        const socialChevron = document.getElementById('socialChevron');

        let menuOpen = false;

        menuButton.addEventListener('click', () => {
            menuOpen = !menuOpen;
            menuButton.classList.toggle('active', menuOpen);
            subMenu.classList.toggle('active', menuOpen);

            if (!menuOpen) {
                supportContent.classList.remove('active');
                supportChevron.classList.remove('active');
                socialContent.classList.remove('active');
                socialChevron.classList.remove('active');
            }
        });

        supportHeader.addEventListener('click', () => {
            supportContent.classList.toggle('active');
            supportChevron.classList.toggle('active');
        });

        socialHeader.addEventListener('click', () => {
            socialContent.classList.toggle('active');
            socialChevron.classList.toggle('active');
        });

        // Fechar o menu ao clicar fora dele
        document.addEventListener('click', (e) => {
            if (!menuButton.contains(e.target) && !subMenu.contains(e.target) && menuOpen) {
                menuOpen = false;
                menuButton.classList.remove('active');
                subMenu.classList.remove('active');
                supportContent.classList.remove('active');
                supportChevron.classList.remove('active');
                socialContent.classList.remove('active');
                socialChevron.classList.remove('active');
            }
        });

        // Adicionar funcionalidade aos itens do menu
        const menuItems = document.querySelectorAll('.sub-menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                const itemName = item.querySelector('span').textContent;
                alert(`Você clicou em: ${itemName}`);
            });
        });