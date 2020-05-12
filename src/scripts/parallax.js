let windowWidth = null;
(() => {
    const get = () => {
        windowWidth = document.querySelector('body').clientWidth;
    };
    get();
    window.addEventListener("resize", () => get());
})();

const parallaxWelcome = document.querySelector('.welcome-sections__parallax');
const parallaxLast = document.querySelector('.last-sections__parallax');

[parallaxWelcome, parallaxLast].forEach((parallax) => {
    const layers = parallax.querySelectorAll('.parallax__layer');
    const parent = parallax.parentNode;
    
    const parentOffsetTop = parent.offsetTop;
    
    function moveLayers(scrollValue) {
        layers.forEach((layer) => {
            var layerTransform;
            
            if (layer.style.transform !== '') {
                layerTransform = layer.style.transform;
            } else {
                layerTransform = window.getComputedStyle(layer).getPropertyValue('transform');
            }
            
            if (layerTransform !== 'none') {
                const speedRatio = layer.dataset.speed;
                let reduction = scrollValue * speedRatio / 10;
                let translate = layerTransform.match(/translateY\(.+\)/);
                let newTransform;
                if (translate !== null) {
                    newTransform = layerTransform.replace(/translateY\(.+\)/, " translateY(-" + reduction + "%)");
                } else {
                    newTransform = layerTransform +" translateY(-" + reduction + "%)";
                }
                
                layer.style.transform = newTransform;
            }
        });
    }

    window.addEventListener('scroll', e => {
        const scrollValue = window.pageYOffset;
        if (windowWidth > 768 && scrollValue - parentOffsetTop >= 0) {
            moveLayers(scrollValue - parentOffsetTop);
        }
    })
});


