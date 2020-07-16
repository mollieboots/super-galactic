export class SuperGalactic {
    constructor(age, planet, sex) {
        this.age = age;
        this.planet = planet;
        this.sex = sex;
    }

    convertAgeByPlanet(age, planet) {
        let days = (age * 365);
        if (planet == "Mercury") {
            age = (days / 88)
        } else if (planet == "Venus") {
            age = (days / 225)
        } else if (planet == "Mars") {
            age = (days / 687)
        } else if (planet == "Jupiter") {
            age = (days / 4300)
        }
        return age.toFixed(2);
    }

    lifeSpanCalculator(age, sex) {
        let timeLeft;
        if (sex == "Female") {
            timeLeft = 81.4 - age;
        } else {
            timeLeft = 76.3 - age;
        }
        return timeLeft.toFixed(2);
    }
}
