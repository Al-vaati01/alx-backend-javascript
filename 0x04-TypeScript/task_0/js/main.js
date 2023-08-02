var s1 = {
    firstName: 'john',
    lastName: 'doe',
    age: 30,
    location: 'maldives'
};
var s2 = {
    firstName: 'jane',
    lastName: 'doe',
    age: 26,
    location: 'new york'
};
var studentsList = [s1, s2];
var headList = ['Firstname', 'Location'];
var table = document.createElement('table');
table.style.width = '500px';
table.style.border = '1px solid';
var caption = document.createElement('caption');
caption.textContent = 'Students';
var thead = document.createElement('thead');
thead.style.backgroundColor = 'rgb(183, 236, 179)';
thead.style.fontSize = 'larger';
var tbody = document.createElement('tbody');
var colgroup = document.createElement('colgroup');
for (var i = 0; i < headList.length; i++) {
    var col = document.createElement('col');
    if (i % 2 === 0) {
        col.style.backgroundColor = '#E0E0E0';
        colgroup.appendChild(col);
    }
    else {
        col.style.backgroundColor = '#FDD098';
        colgroup.appendChild(col);
    }
}
var count = 0;
headList.forEach(function (head) {
    if (count < 1) {
        var tr = document.createElement('tr');
        thead.appendChild(tr);
    }
    var th = document.createElement('th');
    th.textContent = head;
    thead.firstChild.appendChild(th);
    table.appendChild(thead);
    count++;
});
studentsList.forEach(function (student) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.textContent = student.firstName;
    td2.textContent = student.location;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
});
table.appendChild(colgroup);
table.appendChild(tbody);
table.appendChild(caption);
document.body.appendChild(table);
