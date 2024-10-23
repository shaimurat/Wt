let add_number = document.getElementById('add_number');
let sort_btn = document.getElementById('sort_btn');
let sort_text = document.getElementById('sort_text');
let arr = [];
let isAscending = true;

add_number.addEventListener('click', function () {
    const input_sort = document.getElementById('input_sort');
    const input_sort_value = input_sort.value;
    const error_msg = document.getElementById('error_msg')

    if (isNaN(input_sort_value) || input_sort_value === '') {
        error_msg.textContent = "Input a valid number";
    } else {
        error_msg.textContent = '';
        arr.push(Number(input_sort_value))
        document.getElementById('input_sort').value = '';
        sortDisplay();
    }

})

sort_btn.addEventListener('click', function () {
    isAscending = !isAscending;
    sort_btn.textContent = isAscending ? "Sort Ascending" : "Sort Descending";
    sortDisplay();
})


function sortDisplay() {
    const sorted_numbers = [...arr].sort((a, b) => isAscending ? (a - b) : (b - a));
    sort_text.textContent = `Sorted numbers: [${sorted_numbers.join(', ')}]`;
}
queueMicrotask