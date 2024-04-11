const container = document.querySelector('.container');
let octavePatern = 'BNBNBBNBNBNB';
let octaves_count = 2;
const mappingBtn = document.querySelector('.mappingBtn');

container.style.display = 'none';
mappingBtn.disabled = false;

mappingBtn.addEventListener('click', () => {
    container.style.display = 'flex';
    mappingBtn.disabled = true;

    for(let i = 0; i < octaves_count; i++) {
        for(let j = 0; j < octavePatern.length; j++) {
            if(octavePatern[j] + octavePatern[j + 1] === 'BN') {
                const white = document.createElement('div');
                white.className = 'white';
                container.appendChild(white);
        
                const black = document.createElement('div');
                black.className = 'black';
                white.appendChild(black);
            } else if(octavePatern[j] + octavePatern[j + 1] === 'BB') {
                const white = document.createElement('div');
                white.className = 'white';
                container.appendChild(white);
            }
        }
    
        const white = document.createElement('div');
        white.className = 'white';
        container.appendChild(white);
    }
});