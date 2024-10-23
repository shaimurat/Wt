document.getElementById('add_btn').addEventListener('click', function () {
    const input = document.getElementById('todo_input');
    const inputValue = input.value.trim();

    if (inputValue === "") {
        alert('You must type something!');
        return;
    } else {
        const listItem = document.createElement('li');
        listItem.classList.add('todo_item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox')

        const div = document.createElement('div');

        const animeText = document.createElement('span');
        animeText.textContent = inputValue;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete_btn');
        deleteButton.addEventListener('click', function () {
            listItem.remove();
        })

        listItem.appendChild(div);
        div.appendChild(checkbox);
        div.appendChild(animeText);
        listItem.appendChild(deleteButton);

        document.getElementById('todo_list').appendChild(listItem);

        input.value = '';
    }
})