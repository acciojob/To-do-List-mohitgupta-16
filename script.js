//your code here

const addItems = document.querySelector('.add-items');
        const itemsList = document.querySelector('.plates');
        const items = [];

        localStorage.removeItem('todo-items');

        function addItem(item, index) {

            const li = document.createElement('li');
            const input = document.createElement('input');
            const label = document.createElement('label');
            input.type = 'checkbox';
            input.checked = item.done;

            input.id = `item${index}`;
            input.setAttribute('data-index', index);
            label.for = `item${index}`;
            label.textContent = item.name;
            li.appendChild(input);
            li.appendChild(label);
            itemsList.appendChild(li);
        }

        function renderItems(items) {
            itemsList.innerHTML = "";
            items.forEach((data, index) => addItem(data, index))
        }
        function handleSubmit(e) {
            e.preventDefault();

            const itemElement = document.querySelector('#item');
            var items = JSON.parse(localStorage.getItem('todo-items'));
            items = items ? items : [];
            items.push({ name: itemElement.value, done: false });
            itemElement.value = "";
            //alert(JSON.stringify(items));
            localStorage.setItem('todo-items', JSON.stringify(items));

            renderItems(items);

        }
        addItems.addEventListener('submit', handleSubmit)