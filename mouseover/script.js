// console.log("h");
const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");
// add event listener
const ri = closedFace.classList;
console.log(ri);
const rin = openFace.classList;
console.log(rin);
closedFace.addEventListener('click', () => {
    if (openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});
openFace.addEventListener('click', () => {
        if (closedFace.classList.contains('closed')) {
            closedFace.classList.add('active');
            openFace.classList.remove('active');
        }
    })
    // if openface conatin open mtlb black waala h tb
    // black dikha do or closeface ko chup DO