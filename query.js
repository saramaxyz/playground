const axios = require("axios")
const fs = require("fs")
const path = require("path")
const FormData = require('form-data');


const request = async (filepath) => {

    const data = new FormData();

    data.append('file',
        fs.createReadStream(filepath)
    );

    const config = {
        method: 'post',
        url: 'https://rrpapt3z2k.us-east-1.awsapprunner.com/process',
        headers: {
            ...data.getHeaders()
        },
        data : data
    };

    return await axios(config).then(resp => resp.data)
}

let data = "file,name,emotion\n"

Promise.all(fs.readdirSync("identification").map(async (file) => {
    const filePath = path.join("identification", file)
    const {emotion,name} = await request(filePath)
    return {emotion,name,file}
})).then(results => {
    console.log(results )
    results.forEach( ({file,name,emotion}) => {
        data += `${file},${name},${emotion}\n`
    })
    fs.writeFileSync("data.csv", data)
})
