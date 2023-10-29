class student {
    name;
    roll;
    address;
    constructor(setName, roll, address){
        this.name = setName;
        this.roll = roll;
        this.address = address
    }
    school = 'Monipuri High School'
    attendance(){
        console.log('student should be attend in class before 10 am');

    }
    exam(){
        console.log(' every student should attend in exam');
    }
}
const Rohul = new student('Rohul', 19, 'Narayangonj')
const Dipu = new student ('Dipu', 12, 'Dhaka')


console.log(Rohul);
console.log(Dipu);
