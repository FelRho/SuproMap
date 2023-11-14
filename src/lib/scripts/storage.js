export const storageManager = {
    storage_name: "locations",

    saveToLocalstorage(locationList) {
        localStorage.setItem(this.storage_name, JSON.stringify(locationList));
    },

    readFromLocalstorage() {
        const data = localStorage.getItem(this.storage_name);

        if (data === null)
            return [];

        return JSON.parse(data);
    },


    dataHasCorrectFormat(locationArray) {


        let result = true;

        locationArray.forEach((element) => {


            if (
                !Object.hasOwn(element, "title") ||
                !Object.hasOwn(element, "address") ||
                !Object.hasOwn(element, "note") ||
                !Object.hasOwn(element, "locationType") ||
                !Object.hasOwn(element, "display_name") ||
                !Object.hasOwn(element, "pos")
            ) {
                result = false;
            }

        });
        
        return result;
    }
}
