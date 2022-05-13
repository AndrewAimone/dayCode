    let weight

    console.log(typeof weight)
    
    let name = "andrew"
    let age = 26
    let stars = 4.5
    let isSubscribed = true

    let student = {
        name:"Andrew",
        age:26,
        weight:100.8,
        isSubscribed:true
    }
    const student1 = {
        name:"rafinha",
        age:23,
        weight:84,
        isSubscribed:false
    }
    console.log(typeof student)
    console.log(student);

    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg`);

    let students = [student]
    students[1] = student1

    console.log(`position 0 = ${students[0]}, position 1 = ${students[1]}`)