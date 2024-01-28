
const express = require("express");

const app = express();
const PORT = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const { faker } = require('@faker-js/faker');
const createUser = () => {
    const newFake = {
        _id: faker.number.octal(255),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
       
    };
    return newFake;
};
const createCompany = () => {
    const newFake = {
        _id: faker.number.octal(255),
        name: faker.company.name(),
        address: {
            street : faker.location.streetAddress(), 
            city: faker.location.cityName(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
       
    };
    return newFake;
};

const newFakeCompany= createCompany();

console.log(newFakeCompany);
const newFakeUser = createUser();



console.log(newFakeUser);

app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany);
});

const newObj = {...newFakeUser,newFakeCompany}
app.get("/api/user/company", (req, res) => {
    
        res.json(newObj); 
        

});
app.listen(PORT, () => console.log(` >>> Server is up and running on PORT ${PORT} and is listening for REQuests to RESpond to`));
