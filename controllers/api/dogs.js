const breedListUrl = "https://dog.ceo/api/breeds/list/all";
// const breedPhotoUrl = "";
// const subBreedPhotoUrl = "";

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
    console.log(req.body);
    try {
        if (req.body.name.includes("-")) {
            const breedNameArr = req.body.name.split("-");
            const parsedBreedPhoto = await fetch(
                `https://dog.ceo/api/breed/${breedNameArr[0]}/${breedNameArr[1]}/images/random`
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
