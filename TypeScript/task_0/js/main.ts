interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Pepe",
    lastName: "Luis",
    age: 11,
    location: "Montevideo"
};

const student2: Student = {
    firstName: "Ju",
    lastName: "Li",
    age: 20,
    location: "Montevideo" 
};

const students: Student [] = [student1, student2];

const table = document.createElement("table");
const head = document.createElement("head");
const body = document.createElement("body");

head.innerHTML = `
    <tr>
        <th>First Name</th>
        <th>Location</th>
    </tr>
`;

table.appendChild(head);

students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.location}</td>
    `;
    body.appendChild(row);
});

table.appendChild(body);

document.body.appendChild(table);
