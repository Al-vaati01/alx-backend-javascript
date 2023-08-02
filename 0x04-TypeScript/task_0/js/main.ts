interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

const s1: Student = {
    firstName: 'john',
    lastName: 'doe',
    age: 30,
    location: 'maldives'
};
const s2: Student = {
    firstName: 'jane',
    lastName: 'doe',
    age: 26,
    location: 'new york'
};

const studentsList = [s1, s2];
const headList = ['Firstname', 'Location'];

const table = document.createElement('table');
table.style.width = '500px';
table.style.border = '1px solid';

const caption = document.createElement('caption');
caption.textContent = 'Students';

const thead = document.createElement('thead');
thead.style.backgroundColor = 'rgb(183, 236, 179)';
thead.style.fontSize = 'larger';

const tbody = document.createElement('tbody');

const colgroup = document.createElement('colgroup');

for (let i = 0; i < headList.length; i++) {
    const col = document.createElement('col');
    if (i % 2 === 0) {
        col.style.backgroundColor = '#E0E0E0';
        colgroup.appendChild(col);
    } else {
        col.style.backgroundColor = '#FDD098';
        colgroup.appendChild(col);
    }
}

let count = 0
headList.forEach((head) => {
    if (count < 1) {
        const tr = document.createElement('tr');
        thead.appendChild(tr);
    }
    const th = document.createElement('th');
    th.textContent = head;
    thead.firstChild.appendChild(th);
    table.appendChild(thead);
    count++;
});
studentsList.forEach(
    (student) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td')

        td1.textContent = student.firstName;
        td2.textContent = student.location;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }
)
table.appendChild(colgroup);
table.appendChild(tbody);
table.appendChild(caption);
document.body.appendChild(table);
