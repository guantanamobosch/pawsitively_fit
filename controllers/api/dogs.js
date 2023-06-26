const breedListUrl = "https://dog.ceo/api/breeds/list/all";

async function getBreedList(req, res) {
    try {
        const parsedBreedList = await fetch(breedListUrl);
        const breedsObject = parsedBreedList;
        console.log(breedsObject);
        if (res.ok) return res.json(breedsObject);
        throw new Error("Bad dog!");
    } catch (err) {
        console.log(`Error from getBreedList() in dog controller: ${err}`);
    }
}

// exports
module.exports = {
    getBreedList,
};
