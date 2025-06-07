import jsonfile from "jsonfile" //for doing operation in json file
import moment from "moment" // to get the date
import simpleGit from "simple-git";// got git push operation

const path = "./data.json"
const date = moment().subtract(2,'d').format();

const data = {
    date: date,
};

jsonfile.writeFile(path, data, (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("File written successfully!", data);
        simpleGit().add([path]).commit(date,{'--date':date}).push();
    }
});

// Simplegit.add take list of files in array, i.e. path in our case
// commit takes commit msg as first param i.e. date ino our case
// finally push the commit