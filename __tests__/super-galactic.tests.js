import { SuperGalactic } from './../src/super-galactic.js';

describe('SuperGalactic', () => {
    let superGalactic;

    beforeEach(function () {
        superGalactic = new SuperGalactic(28, "Venus", "Female");
    });

    test('should calculate age on a chosen planet given the user inputted age', () => {
        expect(superGalactic.convertAgeByPlanet(superGalactic.age, superGalactic.planet)).toEqual("45.42")
    });

});