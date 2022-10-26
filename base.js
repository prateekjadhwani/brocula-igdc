(() => {
    const broculaIGDC = () => {
        let type = 0;
        let intervalObj;

        const init = () => {
            startSlideShow();
            handleFullScreen();
            
            const imageContainer = document.querySelector('.brocula-hi-container');
            imageContainer.addEventListener('click', () => {
                handleImageClick();
            })
        };

        const handleFullScreen = () => {
            const logo = document.querySelector('.brocula-logo-container');
            logo.addEventListener('click', (e) => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                }
            })
            
        };

        const startSlideShow = () => {
            intervalObj = setInterval( () => {
                handleSlide();
            }, 5000);
        };

        const handleImageClick = () => {
            console.log(intervalObj);
            clearInterval(intervalObj);
            type = 2;
            handleSlide();

            setTimeout(() => {
                startSlideShow();
            }, 30000);
        }

        const handleSlide = () => {
            const slides = document.querySelectorAll('.slide');
            slides.forEach((slide, index) => {
                if (index == type) {
                    slide.classList.remove('hide');
                } else {
                    slide.classList.add('hide');
                }
            });
            type++;
            if (type >= slides.length) {
                type = 0;
            }
        };

        init();
    }

    window.addEventListener('DOMContentLoaded', (event) => {
        broculaIGDC();
    });
})();