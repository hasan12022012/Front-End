function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('number').value = value;
    }
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }

}









function incrementValuebtn()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('number').value = value;
    }
}
function decrementValuebtn()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }

}













const countryMenu = document.querySelector(".country-menu"),
    countryBtn = countryMenu.querySelector(".country-btn"),
    countries = countryMenu.querySelectorAll(".country"),
    cBtn_text = countryMenu.querySelector(".cBtn-text");

countryBtn.addEventListener("click", ()=>countryMenu.classList.toggle("active"));    

countries.forEach(country => {
    country.addEventListener("click", () => {
        let selectedCountry = country.querySelector(".country-text").innerText;
        cBtn_text.innerText = selectedCountry;
        countryMenu.classList.remove("active")
    })

})      








const stateMenu = document.querySelector(".state-menu"),
    selectBtn = stateMenu.querySelector(".select-btn"),
    options = stateMenu.querySelectorAll(".option"),
    sBtn_text = stateMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", ()=>stateMenu.classList.toggle("active"));    

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        stateMenu.classList.remove("active")
    })

})     