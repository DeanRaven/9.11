
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname; 
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('monthOutput').innerText = initPerson.month;
    document.getElementById('dayOutput').innerText = initPerson.day;
};

