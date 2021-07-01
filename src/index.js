import "./syles/index.scss"
const fName = {
    firstName: 'Ranjan',
    
};

const lName = {
    lastName: 'Naragaju'
}

const fullName = {
    ...fName,
    ...lName
}

console.log(fullName);