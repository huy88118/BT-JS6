let listPerson = getDataFromLocalStorage();
var inputType = '';

renderTable(listPerson);

// DOM
function getElement(selector) {
    return document.querySelector(selector);
}

function showInputStudent(action, student) {
    inputType = 'Student';

    $('#typeModal').html(action + " Student");
    $('#inputPerson').html(action);
    $('#inputList').html(`
        <label>ID</label>
        <input id='inputID'class='w-100' value="${action === 'Update' ? student.id : ''}" ${action === 'Update' ? 'disabled' : ''}/>
        <div id='idError' class='text-danger d-none d-none'>Nhập lại ID, chỉ chứa chữ số</div>
        <label>Tên</label>
        <input id='inputName' class='w-100' value="${action === 'Update' ? student.name : ''}"/>
        <div id='nameError' class='text-danger d-none'>Nhập lại Tên, chỉ chứa các chữ cái và dấu cách</div>
        <label>Địa chỉ</label>
        <input id='inputAddress' class='w-100' value="${action === 'Update' ? student.address : ''}"/>
        <div id='addressError' class='text-danger d-none'>Nhập lại địa chỉ</div>
        <label>Email</label>
        <input id='inputEmail' class='w-100' value="${action === 'Update' ? student.email : ''}"/>
        <div id='emailError' class='text-danger d-none'>Nhập lại email</div>
        <label>Điểm Toán</label>
        <input id='inputMath' class='w-100' value="${action === 'Update' ? student.math : ''}"/>
        <div id='mathError' class='text-danger d-none'>Nhập lại Điểm, từ 0 đến 10</div>
        <label>Điểm Lý</label>
        <input id='inputPhysics' class='w-100' value="${action === 'Update' ? student.physics : ''}"/>
        <div id='physicsError' class='text-danger d-none'>Nhập lại Điểm, từ 0 đến 10</div>
        <label>Điểm Hóa</label>
        <input id='inputChemistry' class='w-100' value="${action === 'Update' ? student.chemistry : ''}"/>
        <div id='chemistryError' class='text-danger d-none'>Nhập lại Điểm, từ 0 đến 10</div>
    `)
}
getElement("#addStudent").onclick = () => {
    showInputStudent('Add', null);
}

function showInputEmployee(action, employee) {
    inputType = 'Employee';

    $('#typeModal').html(action + " Employee");
    $('#inputPerson').html(action);
    $('#inputList').html(`
        <label>ID</label>
        <input id='inputID'class='w-100' value="${action === 'Update' ? employee.id : ''}" ${action === 'Update' ? 'disabled' : ''}/>
        <div id='idError' class='text-danger d-none'>Nhập lại ID, chỉ chứa chữ số</div>
        <label>Tên</label>
        <input id='inputName' class='w-100' value="${action === 'Update' ? employee.name : ''}"/>
        <div id='nameError' class='text-danger d-none'>Nhập lại Tên, chỉ chứa các chữ cái và dấu cách</div>
        <label>Địa chỉ</label>
        <input id='inputAddress' class='w-100' value="${action === 'Update' ? employee.address : ''}"/>    
        <div id='addressError' class='text-danger d-none'>Nhập lại địa chỉ</div>
        <label>Email</label>
        <input id='inputEmail' class='w-100' value="${action === 'Update' ? employee.email : ''}"/>
        <div id='emailError' class='text-danger d-none'>Nhập lại email</div>
        <label>Số ngày làm việc</label>
        <input id='inputDays' class='w-100' value="${action === 'Update' ? employee.days : ''}"/>
        <div id='daysError' class='text-danger d-none'>Nhập lại ngày làm việc</div>
        <label>Lương mỗi ngày</label>
        <input id='inputSalaryUnit' class='w-100' value="${action === 'Update' ? employee.salaryUnit : ''}"/>
        <div id='salaryError' class='text-danger d-none'>Nhập lại tiền lương mỗi ngày</div>
    `)
}
getElement("#addEmployee").onclick = () => {
    showInputEmployee('Add', null);
}

function showInputCustomer(action, customer) {
    inputType = 'Customer';

    $('#typeModal').html(action + " Customer");
    $('#inputPerson').html(action);
    $('#inputList').html(`
        <label>ID</label>
        <input id='inputID'class='w-100' value="${action === 'Update' ? customer.id : ''}" ${action === 'Update' ? 'disabled' : ''}/>
        <div id='idError' class='text-danger d-none'>Nhập lại ID, chỉ chứa chữ số</div>
        <label>Tên</label>
        <input id='inputName' class='w-100' value="${action === 'Update' ? customer.name : ''}"/>
        <div id='nameError' class='text-danger d-none'>Nhập lại Tên, chỉ chứa các chữ cái và dấu cách</div>
        <label>Địa chỉ</label>
        <input id='inputAddress' class='w-100' value="${action === 'Update' ? customer.address : ''}"/>    
        <div id='addressError' class='text-danger d-none'>Nhập lại địa chỉ</div>
        <label>Email</label>
        <input id='inputEmail' class='w-100' value="${action === 'Update' ? customer.email : ''}"/>
        <div id='emailError' class='text-danger d-none'>Nhập lại Email</div>
        <label>Tên công ty</label>
        <input id='inputNameCompany' class='w-100' value="${action === 'Update' ? customer.nameCompany : ''}"/>
        <div id='nameCompanyError' class='text-danger d-none'>Nhập lại tên công ty</div>
        <label>Hóa đơn</label>
        <input id='inputBill' class='w-100' value="${action === 'Update' ? customer.bill : ''}"/>
        <div id='billError' class='text-danger d-none'>Nhập lại hóa đơn</div>
        <label>Đánh giá</label>
        <br />
        <select id='inputRate' class='w-50'>
            <option valued>Lựa chọn</option>
            <option value='1' ${(action === 'Update' &&customer.rate === 'Good') ? 'selected' : ''}>Tốt</option>
            <option value='2' ${(action === 'Update' &&customer.rate === 'Bad') ? 'selected' : ''}>Không tốt</option>
        </select>
    `)
}
getElement("#addCustomer").onclick = () => {
    showInputCustomer('Add', null);
}

$('#inputPerson').click(function () {
    switch (inputType) {
        case 'Student': {
            handleInputStudent();
        }
            break;
        case 'Employee': {
            handleInputEmployee();
        }
            break;
        case 'Customer': {
            handleInputCustomer();
        }
    }
})

// Handle when clicking addNewPerson button
function handleInputStudent() {
    let id = $('#inputID').val();
    let name = $('#inputName').val();
    let address = $('#inputAddress').val();
    let email = $('#inputEmail').val();
    let math = $('#inputMath').val();
    let physics = $('#inputPhysics').val();
    let chemistry = $('#inputChemistry').val();

    let student = new Student(name, address, id, email, math, physics, chemistry);
    if (validateStudent(student)) {
        let index = listPerson.findIndex(person => person.id === student.id);
        if (index === -1) {
            listPerson.push(student);
        } else {
            listPerson[index] = student;
        }
        //reset form
        getElement('#inputList').querySelectorAll('div').forEach((element) => {
            element.classList.add('d-none');
        })
        getElement('#inputList').querySelectorAll('input').forEach((element) => {
            element.value = '';
        })

        saveToLocalStorage();
        // renderTable(listPerson);
        sortListPerson();
    }
}

function handleInputEmployee() {
    let id = $('#inputID').val();
    let name = $('#inputName').val();
    let address = $('#inputAddress').val();
    let email = $('#inputEmail').val();
    let days = $('#inputDays').val();
    let salaryUnit = $('#inputSalaryUnit').val();

    let employee = new Employee(name, address, id, email, days, salaryUnit);
    if (validateEmployee(employee)) {
        let index = listPerson.findIndex(person => person.id === employee.id);
        if (index === -1) {
            listPerson.push(employee);
        } else {
            listPerson[index] = employee;
        }
        //reset form
        getElement('#inputList').querySelectorAll('div').forEach((element) => {
            element.classList.add('d-none');
        })
        getElement('#inputList').querySelectorAll('input').forEach((element) => {
            element.value = '';
        })

        saveToLocalStorage();
        // renderTable(listPerson);
        sortListPerson();
    }
}

function handleInputCustomer() {
    let id = $('#inputID').val();
    let name = $('#inputName').val();
    let address = $('#inputAddress').val();
    let email = $('#inputEmail').val();
    let nameCompany = $('#inputNameCompany').val();
    let bill = $('#inputBill').val();
    let rate = $('#inputRate').val();
    switch (rate) {
        case '1': {
            rate = 'Good';
        }
            break;
        case '2': {
            rate = 'Bad';
        }
            break;
        default: {
            rate = 'Satisfied';
        }
    }

    let customer = new Customer(name, address, id, email, nameCompany, bill, rate);
    if (validateCustomer(customer)) {
        let index = listPerson.findIndex(person => person.id === customer.id);
        if (index === -1) {
            listPerson.push(customer);
        } else {
            listPerson[index] = customer;
        }
        //reset form
        getElement('#inputList').querySelectorAll('div').forEach((element) => {
            element.classList.add('d-none');
        })
        getElement('#inputList').querySelectorAll('input').forEach((element) => {
            element.value = '';
        })

        saveToLocalStorage();
        // renderTable(listPerson);
        sortListPerson();
    }
}

// Validation

//check general information
function validateGeneralInformation(person) {
    let isValidated = true;
    //check ID
    if (!/^\d+$/.test(person.id)) {
        getElement('#idError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#idError').classList.add('d-none');
    }
    //check name
    if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(person.name)) {
        getElement('#nameError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#nameError').classList.add('d-none');
    }
    //check address
    if (!person.address) {
        getElement('#addressError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#addressError').classList.add('d-none');
    }
    //check mail 
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(person.email)) {
        getElement('#emailError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#emailError').classList.add('d-none');
    }

    return isValidated;
}

function validateStudent(student) {
    let isValidated = true;

    if (!validateGeneralInformation(student))
        isValidated = false;

    //check marks
    if (!/^\d+$/.test(student.math) || (student.math.length > 1 && +student.math > 10)) {
        getElement('#mathError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#mathError').classList.add('d-none');
    }
    if (!/^\d+$/.test(student.physics) || (student.physics.length > 1 && +student.physics > 10)) {
        getElement('#physicsError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#physicsError').classList.add('d-none');
    }
    if (!/^\d+$/.test(student.chemistry) || (student.chemistry.length > 1 && +student.chemistry > 10)) {
        getElement('#chemistryError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#chemistryError').classList.add('d-none');
    }

    return isValidated;
}

function validateEmployee(employee) {
    let isValidated = true;

    if (!validateGeneralInformation(employee))
        isValidated = false;

    //check no. of working days
    if (!/^\d+$/.test(employee.days)) {
        getElement('#daysError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#daysError').classList.add('d-none');
    }
    //check salary per day
    if (!/^\d+$/.test(employee.salaryUnit)) {
        getElement('#salaryError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#salaryError').classList.add('d-none');
    }

    return isValidated;
}

function validateCustomer(customer) {
    let isValidated = true;

    if (!validateGeneralInformation(customer))
        isValidated = false;

    //check name of company
    if (!customer.nameCompany) {
        getElement('#nameCompanyError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#nameCompanyError').classList.add('d-none');
    }
    //check bill
    if (!/^\d+$/.test(customer.bill)) {
        getElement('#billError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#billError').classList.add('d-none');
    }

    return isValidated;
}

// render table
function renderTable(listPerson) {
    let html = listPerson.reduce((result, person) => {
        return result += `
            <tr>
                <td>${person.id}</td>
                <td>${person.name}</td>
                <td>${person.address}</td>
                <td>${person.email}</td>
                <td>${person.constructor.name}</td>        
                <td>
                    <button class='btn btn-primary' onclick="showDetails('${person.id}')" data-bs-toggle="modal" data-bs-target="#detailsModal">Hiển thị</button>
                    <button class='btn btn-secondary' data-bs-toggle="modal" data-bs-target="#inputPersonModal" onclick="editPerson('${person.id}')">Chỉnh sửa</button>
                    <button class='btn btn-danger' onclick="removePerson('${person.id}')">Xóa</button>
                </td>
            </tr>
        `
    }, '')

    getElement('#tableList').innerHTML = html;
}

//show details of person
function showDetails(personID) {
    let person = listPerson.find(person => person.id === personID);

    getElement('#detailsTitle').innerHTML = person.constructor.name;

    let html = `
        <label class='fw-bold'>ID: </label>
        <span>${person.id}</span>
        <br>
        <label class='fw-bold'>Tên: </label>
        <span>${person.name}</span>
        <br>
        <label class='fw-bold'>Địa chỉ: </label>
        <span>${person.address}</span>
        <br>
        <label class='fw-bold'>Email: </label>
        <span>${person.email}</span>
        <br>
    `;

    switch (person.constructor.name) {
        case 'Student': {
            html += `
                <label class='fw-bold'>Điểm Toán: </label>
                <span>${person.math}</span>
                <br>
                <label class='fw-bold'>Điểm Lý: </label>
                <span>${person.physics}</span>
                <br>
                <label class='fw-bold'>Điểm Hóa: </label>
                <span>${person.chemistry}</span>
                <br>
                <label class='fw-bold'>Điểm trung bình: </label>
                <span class='fst-italic'>${person.calcAverageScore()}</span>
            `
        }
            break;
        case 'Employee': {
            html += `
                <label class='fw-bold'>Ngày làm việc: </label>
                <span>${person.days}</span>
                <br>
                <label class='fw-bold'>Lương mỗi ngày: </label>
                <span>$${person.salaryUnit.toLocaleString()}</span>
                <br>
                <label class='fw-bold'>Tổng tiền lương: </label>
                <span class='fst-italic'>$${person.calcSalary().toLocaleString()}</span>
            `
        }
            break;
        case 'Customer': {
            html += `
                <label class='fw-bold'>Hóa đơn: </label>
                <span>$${person.bill.toLocaleString()}</span>
                <br>
                <label class='fw-bold'>Nhận xét: </label>
                <span>${person.rate}</span>
            `
        }
    }

    getElement('#detailsBody').innerHTML = html;
}

//remove person
function removePerson(personID) {
    let index = listPerson.findIndex(person => person.id === personID);
    listPerson.splice(index, 1);

    saveToLocalStorage();
    // renderTable(listPerson);
    sortListPerson();
}

//edit person
function editPerson(personID) {
    let person = listPerson.find(person => person.id === personID);

    switch (person.constructor.name) {
        case 'Student': {
            showInputStudent('Update', person);
        }
            break;
        case 'Employee': {
            showInputEmployee('Update', person);
        }
            break;
        case 'Customer': {
            showInputCustomer('Update', person);
        }
            break;
    }
}

// sort listPerson
getElement('#typePerson').onchange = sortListPerson;
getElement('#sortType').onchange = sortListPerson;
function sortListPerson() {
    //get type of person to sort
    let typePerson = getElement('#typePerson').value;
    let tempList;
    switch (typePerson) {
        case '1': {
            tempList = listPerson.filter(person => person.constructor.name === 'Student');
        }
            break;
        case '2': {
            tempList = listPerson.filter(person => person.constructor.name === 'Employee');
        }
            break;
        case '3': {
            tempList = listPerson.filter(person => person.constructor.name === 'Customer');
        }
            break;
        default: {
            tempList = [...listPerson];
        }
    }
    //get type of sort
    let typeSort = getElement('#sortType').value;
    switch(typeSort) {
        case '1': {
            tempList.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            }) 
        }
            break;
        default: {}
    }
    renderTable(tempList);
}

// Save to local storage
function saveToLocalStorage() {
    //create temp list to add type attribute to each element
    const tempList = [...listPerson];
    tempList.forEach((item) => {
        item['type'] = item.constructor.name;
    })

    const json = JSON.stringify(tempList);

    localStorage.setItem('listPerson', json);
}

function getDataFromLocalStorage() {
    const json = localStorage.getItem('listPerson');
    if (!json) return [];

    let data = JSON.parse(json);
    for (let i = 0; i < data.length; i++) {
        let person = { ...data[i] };
        switch (person.type) {
            case 'Student': {
                person = new Student(person.name, person.address, person.id, person.email, person.math, person.physics, person.chemistry);
            }
                break;
            case 'Employee': {
                person = new Employee(person.name, person.address, person.id, person.email, person.days, person.salaryUnit);
            }
                break;
            case 'Customer': {
                person = new Customer(person.name, person.address, person.id, person.email, person.nameCompany, person.bill, person.rate);
            }
                break;
        }
        data[i] = person;
    }

    return data;
}
