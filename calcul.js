function proizvedenie() {
    const chek =/^-+\d+$|\d+$/
    let num1 = document.getElementsByName("number1");
    let num2 = document.getElementsByName("number2");
	
    if (chek.test(num1[0].value) == false|| check.test(num2[0].value) == false) {
        document.getElementById('out').innerHTML='Введённые данные неверны.';
    }
    else{
        let num3 = document.getElementById("out");
        num1[0] = Number.parseInt(num1[0]);
        num2[0] = Number.parseInt(num2[0]);
        num3.innerHTML = num1[0].value * num2[0].value;
	return false;   
    }
}

window.addEventListener('DOMContentLoaded',function(event) {
    console.log("DOM finaly loaded and parsed");
	
    let knopka = document.getElementById("my-button");
    knopka.addEventListener("click", proizvedenie());
})
