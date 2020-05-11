const getWindowWidth = () => {
    return document.querySelector('body').clientWidth;
}

window.addEventListener('resize', () => getWindowWidth());

let windowWidth = getWindowWidth();

const parallaxWelcome = document.querySelector('.welcome-sections__parallax');

[parallaxWelcome].forEach((parallax) => {
    let layers = parallax.querySelectorAll('.parallax__layer');
    console.log(layers)
    
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
        moveLayers(scrollValue);
    })
});


