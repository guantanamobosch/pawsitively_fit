const breedListUrl = "https://dog.ceo/api/breeds/list/all";

async function getBreedList(req, res) {
    console.log("📍 getBreedList in dogs Controller");
    try {
        const parsedBreedList = await fetch(breedListUrl);
        const breedsObject = await parsedBreedList.json();
        // console.log(breedsObject);
        if (parsedBreedList.ok) {
            res.status(200).json(breedsObject); // Send the response back to the client
        } else {
            throw new Error("Bad dog!");
        }
    } catch (err) {
        console.log(`Error from getBreedList() in dog controller: ${err}`);
        res.status(500).json({ error: "Internal Server Error" }); // Send an error response back to the client
    }
}

async function getBreedPhoto(req, res) {
    console.log("📍 getBreedPhoto func in dogs controller");
    console.log(req.body.name);
    const breedName = req.body.name;
    try {
        if (breedName.includes("-")) {
            const breedNameArr = breedName.split("-");
            const lowerCaseFirstName =
                breedNameArr[0].charAt(0).toLowerCase() +
                breedNameArr[0].slice(1);
            const lowerCaseLastName =
                breedNameArr[1].charAt(0).toLowerCase() +
                breedNameArr[1].slice(1);
            const parsedBreedPhoto = await fetch(
                `https://dog.ceo/api/breed/${lowerCaseFirstName}/${lowerCaseLastName}/images/random`
            );
            const breedPhoto = await parsedBreedPhoto.json();
            if (parsedBreedPhoto.ok) {
                res.status(200).json(breedPhoto);
            } else {
                throw new Error("Bad Dog Photo!");
            }
        } else {
            const lowerCaseBreedName =
                breedName[0].charAt(0).toLowerCase() + breedName.slice(1);
            const parsedBreedPhoto = await fetch(
                `https://dog.ceo/api/breed/${lowerCaseBreedName}/images/random`
            );
            const breedPhoto = await parsedBreedPhoto.json();
            if (parsedBreedPhoto.ok) {
                res.status(200).json(breedPhoto);
            } else {
                throw new Error("Bad Dog Photo!");
            }
        }
    } catch (err) {
        console.log(`Error from getBreedPhoto() in dog controller: ${err}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// exports
module.exports = {
    getBreedList,
    getBreedPhoto,
};
