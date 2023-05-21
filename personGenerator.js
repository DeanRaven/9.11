const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Анна",
            "id_3": "Ирина",
            "id_4": "Екатерина",
            "id_5": "Мария",
            "id_6": "Николь",
            "id_7": "Анастасия",
            "id_8": "Виктория",
            "id_9": "Елизавета",
            "id_10": "Инна"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Никитов",
            "id_7": "Михайлов",
            "id_8": "Даниилов",
            "id_9": "Егоров",
            "id_10": "Андреев"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Актёр",
            "id_2": "Переводчик",
            "id_3": "Учитель",
            "id_4": "Водитель",
            "id_5": "Юрист",
            "id_6": "Менеджер",
            "id_7": "Тренер",
            "id_8": "Ветеринар",
            "id_9": "Программист",
            "id_10": "Продавец"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Врач",
            "id_2": "Ювелир",
            "id_3": "Художник",
            "id_4": "Актриса",
            "id_5": "Эколог",
            "id_6": "Библиотекарь",
            "id_7": "Парикмахер",
            "id_8": "Фотограф",
            "id_9": "Космонавт",
            "id_10": "Няня"
        }
    }`,

    monthJson: `{  
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function () {
        return (Math.floor(Math.random()* 2) === 0 ) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomBirthYear: function (min, max){
        min = 1940;
        max = 1999;
        return Math.floor(Math.random() * (max - min +1)) + min + '-го года';
    },

    randomFirstName: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }},

    randomSurname: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'а';
        }},

    randomPatronymic: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.patronymicJson) + 'ич';
        } else {
            return this.randomValue(this.patronymicJson) + 'на';
         }},

    randomProfession: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }},
    
    randomDay: function (min, max){
        if (this.monthJson = ("Января", "Марта", "Мая", "Июля", "Августа", "Октября", "Декабря")) {
            min = 1;
            max = 31;
        } else if (this.monthJson = ("Апреля", "Июня", "Сентября", "Ноября")){
            min = 1;
            max = 30;
        }else if (this.monthJson = ("Февраля")) {
            min = 1;
            max = 28;
        }
        return Math.floor(Math.random() * (max - min +1)) + min;
    },

    randomMonth:  function () {
        return this.randomValue(this.monthJson);
    },
  
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        this.person.month = this.randomMonth();
        this.person.day = this.randomDay();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
let restart = window.document.querySelector('#restart');
restart.addEventListener('click',() => {
    window.document.location.reload();
});
const h3 = document.getElementById("surnameOutput");
const h4 = document.getElementById("firstNameOutput");
const h5 = document.getElementById("patronymicOutput");
const span1 = document.getElementById("professionOutput");
const span2 = document.getElementById("genderOutput");
const span3 = document.getElementById("dayOutput");
const span4 = document.getElementById("monthOutput");
const span5 = document.getElementById("birthYearOutput");

let clear = window.document.querySelector('#clear');
clear.addEventListener('click',() => {
    h3.remove();
    h4.remove();
    h5.remove();
    span1.remove();
    span2.remove();
    span3.remove();
    span4.remove();
    span5.remove();
});