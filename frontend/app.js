document.querySelectorAll('.seed').forEach(seed => {
    seed.addEventListener('click', plantSeed);
});

document.querySelectorAll('.tool').forEach(tool => {
    tool.addEventListener('click', useTool);
});

function plantSeed(event){
    const plantType = event.target.dataset.plant;
    // Use this to create a new plant in the .plant-area
}

function useTool(event){
    const action = event.target.dataset.action;
    // Use this to perform the corresponding action on the plants
}