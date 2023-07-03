let data = require("./task.json");

console.log("Data:", data);

let filterData = data.filter((e) => {
    return e.state_name === "Mahārāshtra";
})

console.log("FilterData:", filterData);
