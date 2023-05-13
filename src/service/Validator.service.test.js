

describe('inscriptionValide_function', () => {

    // Tests that the function returns true when all parameters are valid. 
    it("test_valid_input", () => {
        const user = {
            nom: "Doe",
            prenom: "John",
            adresseMail: "johndoe@example.com",
            numeroTel: "1234567890",
            adresse: {
                wilaya: "Algiers",
                commune: "Bab Ezzouar"
            },
            genre: "HOMME"
        }
        expect(inscriptionValide(user.nom, user.prenom, user.adresseMail, user.numeroTel, user.adresse.wilaya, user.adresse.commune, user.genre)).toBe(true);
    });

    // Tests that the function returns false and alerts when any parameter is an empty string. 
    it("test_empty_string", () => {
        const user = {
            nom: "",
            prenom: "John",
            adresseMail: "johndoe@example.com",
            numeroTel: "1234567890",
            adresse: {
                wilaya: "Algiers",
                commune: "Bab Ezzouar"
            },
            genre: "HOMME"
        }
        expect(inscriptionValide(user.nom, user.prenom, user.adresseMail, user.numeroTel, user.adresse.wilaya, user.adresse.commune, user.genre)).toBe(false);
    });

    // Tests that the function returns false and alerts when any parameter is invalid. 
    it("test_invalid_input", () => {
        const user = {
            nom: "Doe123",
            prenom: "John",
            adresseMail: "johndoe@example.com",
            numeroTel: "1234567890",
            adresse: {
                wilaya: "Algiers",
                commune: "Bab Ezzouar"
            },
            genre: "HOMME"
        }
        expect(inscriptionValide(user.nom, user.prenom, user.adresseMail, user.numeroTel, user.adresse.wilaya, user.adresse.commune, user.genre)).toBe(false);
    });

    // Tests that the function handles special characters in input correctly. 
    it("test_special_characters", () => {
        const user = {
            nom: "Doe",
            prenom: "John",
            adresseMail: "johndoe@example.com",
            numeroTel: "1234567890",
            adresse: {
                wilaya: "Algiers",
                commune: "Bab Ezzouar #1"
            },
            genre: "HOMME"
        }
        expect(inscriptionValide(user.nom, user.prenom, user.adresseMail, user.numeroTel, user.adresse.wilaya, user.adresse.commune, user.genre)).toBe(false);
    });

    // Tests that the function returns true when any parameter is at its maximum length. 
    it("test_max_length_input", () => {
        const user = {
            nom: "Doe".repeat(20),
            prenom: "John".repeat(20),
            adresseMail: "johndoe@example.com",
            numeroTel: "1234567890",
            adresse: {
                wilaya: "Algiers".repeat(20),
                commune: "Bab Ezzouar".repeat(20)
            },
            genre: "HOMME"
        }
        expect(inscriptionValide(user.nom, user.prenom, user.adresseMail, user.numeroTel, user.adresse.wilaya, user.adresse.commune, user.genre)).toBe(true);
    });

    // Tests that the function handles non-Latin characters in input correctly. 
    it("test_non_latin_characters", () => {
        const user = {
            nom: "Doe",
            prenom: "John",
            adresseMail: "johndoe@example.com",
            numeroTel: "1234567890",
            adresse: {
                wilaya: "الجزائر",
                commune: "باب الزوار"
            },
            genre: "HOMME"
        }
        expect(inscriptionValide(user.nom, user.prenom, user.adresseMail, user.numeroTel, user.adresse.wilaya, user.adresse.commune, user.genre)).toBe(true);
    });
});
