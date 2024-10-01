const generarBtn = document.getElementById('generarBtn');
const result = document.getElementById('result');
const loading = document.getElementById('cargando')

function generateNumberRandom(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 11);
            resolve(randomNum);
        }, 5000);
    });
}

generarBtn.addEventListener('click', () => {
    loading.style.display = 'block';
    result.textContent = '';

   generateNumberRandom().then((randomNum) => {
    loading.style.display = 'none' ;
    result.textContent = `Numero Generado ${randomNum}`;
   }).catch((error) => {
    result.textContent = `Error: ${error}`;
   }).finally(()=> {
    loading.style.display = 'none';
   })
})