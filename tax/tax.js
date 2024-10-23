const tax_btn = document.getElementById('tax_btn');
const tax_text = document.getElementById('tax_text');

tax_btn.addEventListener('click', function(){
    const tax_input = document.getElementById('tax_input');
    tax_input_value = tax_input.value;
    if(tax_input_value > 10000){
        tax_text.textContent = `Tax amount: ${tax_input_value * 0.25}`;
    }else if(5000 <= tax_input_value <= 10000){
        tax_text.textContent = `Tax amount: [${tax_input_value * 0.2}]`;
    }else if(tax_input_value < 5000){
        tax_text.textContent = `Tax amount: [${tax_input_value * 0.15}]`;
    }
})