const breedListUrl = "https://dog.ceo/api/breeds/list/all";

async function getBreedList(req, res) {
    console.log("📍 getBreedList in dogs Controller");
    try {
        const parsedBreedList = await fetch(breedListUrl);
        const breedsObject = await parsedBreedList.json();
        console.log(breedsObject);
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

// exports
module.exports = {
    getBreedList,
};
