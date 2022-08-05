// UC4 Display Employee Details in Tabular Format using Template Literals

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//UC 4 – Display Employee Details in Tabular Format using Template Literals */
//Template literal ES6 feature
const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
            <td><img class="profile" alt="" src="Ellipse -2.png"></td>
            <td>Siddhant Shrivastava</td>
            <td>Male</td>
            <td><div class="dept-label">HR</div><div class="dept-label">Finance</div></td>
            <td>300000</td>
           <td>1 Nov 2020</td>
          <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
              <img id="1" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
//UC5 - Ability to view Employee Payroll details in a Tabular Format from JSON Object.
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
/*const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData = createEmployeePayrollJSON()[1];
    const innerHtml = `${headerHtml}
                <tr>
                    <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                    <td>${empPayrollData._name}</td>
                    <td>${empPayrollData._gender}</td>
                    <td>
                        <div class="dept-label">${empPayrollData._department[0]}</div>
                        <div class="dept-label">${empPayrollData._department[1]}</div>
                    </td>
                         <td>${empPayrollData._salary}</td>
                         <td>${empPayrollData._startDate}</td>
                         <td>
                             <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
                             <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
                         </td>
                </tr>`;

    document.querySelector('#table-display').innerHTML = innerHtml;
}*/
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Radha ',
            _gender: 'Female',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: 'Ellipse -4.png'
        },
        {
            _name: 'Atul',
            _gender: 'Male',
            _department: [
                'Sales','HR'

            ],
            _salary: '400000',
            _startDate: '29 Mar 2020',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: 'Ellipse -5.png'
        }
    ];
    return empPayrollListLocal;
}

//UC 5 – Display Employee Details from JSON Object including the Department
/*
     const createInnerHtml = () => {
        const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
            "<th>Salary</th><th>Start Date</th><th>Actions</th>";
        let empPayrollData = createEmployeePayrollJSON()[0];
        const innerHtml = `${headerHtml}
    
                    <tr>
                        <td><img class="profile" alt="" src="${empPayrollData._profilePic}" alt=""></td>
                        <td>${empPayrollData._name}</td>
                        <td>${empPayrollData._gender}</td>
                        <td>${getDeptHtml(empPayrollData._department)}</td>
                        <td>${empPayrollData._salary}</td>
                        <td>${empPayrollData._startDate}</td>
                             <td>
                                 <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
                                 <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
                             </td>
                    </tr>`;
            
        document.querySelector('#table-display').innerHTML = innerHtml;
    }
    const getDeptHtml = (deptList) => {
     let deptHtml = '';
     for (const dept of deptList) {
         deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
     }
     return deptHtml;
 }*/
  //UC 5 – Display All Employee Payroll Details from JSON Object

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();

    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        
        <tr>
           <td><img class="profile" alt="" src="${empPayrollData._profilePic}" alt=""></td>
           <td>${empPayrollData._name}</td>
           <td>${empPayrollData._gender}</td>
           <td>${getDeptHtml(empPayrollData._department)}</td>
           <td>${empPayrollData._salary}</td>
           <td>${empPayrollData._startDate}</td>
                <td>
                    <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
                    <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
                </td>
       </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;


}
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

