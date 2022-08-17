const input = document.getElementById('input');

function display(num) {
    input.value += num;
}

function calculate () {
    var answer = eval(input.value);
    input.value = answer;

}

function clr() {
    input.value = '';
}