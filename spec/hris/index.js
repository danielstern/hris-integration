const express = require('express');
const hris = new express();

const employees = {
    "EMP001": {
        name : "Tyrion Lannister"
    },
    "EMP002": {
        name : "John Snow"
    }
}

const roles = {
    "EMP001": "President",
    "EMP002": "Janitor"
}

const tokens = {
    "TOK-001" : 1 // access everything
}

hris.get('/employees',(req,res)=>{
    const { query } = req;
    const { token } = query;

    if (!tokens[token] || tokens[token] !== 1) {
        res.status(300).json("Invalid token");
    }

    res.json(employees);
});

hris.get('/role/:id',(req,res)=>{
    const { params, query } = req;
    const { token } = query;

    if (!tokens[token] || tokens[token] !== 1) {
        return res.status(300).json("Invalid token");
    }
    const { id } = params;
    const role = roles[id];
    res.json(role);
});


hris.get('/employee/:id',(req,res)=>{
    const { params, query } = req;
    const { token } = query;

    if (!tokens[token] || tokens[token] !== 1) {
        return res.status(300).json("Invalid token");
    }
    const { id } = params;
    const employee = employees[id];
    res.json(employee);
    // return employee;
});

const PORT = 12042
hris.listen(12042,console.info(`HRIS listening on http://localhost:${PORT}`));