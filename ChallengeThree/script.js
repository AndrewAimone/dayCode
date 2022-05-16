

function transformDegree(degree){

    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenheitExists = degree.toUpperCase().includes("F")

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error("Degree Invalid")
    }

    let updDegree = Number(degree.toUpperCase().replace("F", ""))
    let form = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign="C"

    if(celsiusExists){
        updDegree = Number(degree.toUpperCase().replace("C", ""))
        form = celsius => celsius * 9/5 + 32
        degreeSign="F"
    }

    return form(updDegree) + degreeSign
}

try {
    console.log( transformDegree('50F'));
    console.log( transformDegree('10C'));
    console.log(transformDegree('30E'));
    
} catch (error) {
    console.log(error.message);
}