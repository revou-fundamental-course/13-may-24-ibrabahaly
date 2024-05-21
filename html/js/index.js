const form = document.getElementById('segitiga-form');
const alasInput = document.getElementById('alas');
const tinggiInput = document.getElementById('tinggi');
const luasElement = document.getElementById('luas');
const kelilingElement = document.getElementById('keliling');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const alas = parseFloat(alasInput.value);
    const tinggi = parseFloat(tinggiInput.value);

    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert('Alas dan tinggi harus lebih besar dari 0 dan harus berupa angka');
        return;
    }

    const luas = (alas * tinggi) / 2;
    const keliling = alas + tinggi + Math.sqrt(alas ** 2 + tinggi ** 2);

    luasElement.textContent = `Luas segitiga: ${luas.toFixed(2)} cm²`;
    kelilingElement.textContent
});