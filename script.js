document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.button');
    const questionBtn = document.createElement('button');
    questionBtn.className = 'questionBtn';
    questionBtn.textContent = 'Enter number';
    button.appendChild(questionBtn);

    const container = document.querySelector('.container');

    createGrid(16);

    questionBtn.addEventListener('click', () => {
        let input = prompt('Please enter the amount of pixels, note it cannot be larger than 100');

        if(input > 100){
            while(input > 100){
                input = prompt("Too large");
            }
        }
        createGrid(input);
    });

    function createGrid(number){
        container.innerHTML = "";
        const size = number * number;
        const divSize = Math.floor(950 / number) - 2;
     
        for (let i = 1; i <= size; i++) {
            const div = document.createElement("div");
            div.className = "grid";
            div.style.width = `${divSize}px`; 
            div.style.height = `${divSize}px`;
    
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'red';
            });
    
            container.appendChild(div);
        }
    }
});






