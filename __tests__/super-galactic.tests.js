import { SuperGalactic } from './../src/super-galactic.js';

describe('SuperGalactic', () => {
    let superGalactic;

    beforeEach(function () {
        superGalactic = new SuperGalactic(28, "Venus", "Female");
    });

    test('should calculate age on a chosen planet given the user inputted age', () => {
        expect(superGalactic.convertAgeByPlanet(superGalactic.age, superGalactic.planet)).toEqual("45.42")
    });
    
    test('should calculate the users remaining years based on the users age and national average data', () => {
        expect(superGalactic.lifeSpanCalculator(superGalactic.age, superGalactic.sex)).toEqual("53.40")
    });
});