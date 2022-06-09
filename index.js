const picketColor = document.getElementById("picketColor");
const btnLoad = document.getElementById("btnVisualizar");
const paragraphExa = document.querySelector("#paragraphExa");
const endPicket = document.getElementById("endPicket");
const textCopy = document.getElementById('textCopy')

/* console.log(picketColor)
console.log(btnLoad)
console.log(paragraphExa)
console.log(endPicket) */

btnLoad.addEventListener("click", () => {
    console.log("me diste click");
    paragraphExa.textContent = picketColor.value;
    endPicket.style.backgroundColor = picketColor.value;
});

textCopy.addEventListener('click' , () => {
    navigator.clipboard
        .writeText(picketColor.value)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
})
