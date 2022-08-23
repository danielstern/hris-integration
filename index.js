const { get } = require('axios');
const configuration = {
    auth: {
        token: "TOK-001"
    },
    endpoints: {
        employees: `http://localhost:12042/employees`,
        role: `http://localhost:12042/role/{id}`,
    }
};

(async function () {

    const scraped = [];

    try {
        console.log("Begin HRIS Integration");
        console.info("Getting all employees");

        const { data: employees } = await get(configuration.endpoints.employees, { params: { ...configuration.auth } });
        console.log(employees);

        for (let _id in employees) {

            const { data: role } = await get(configuration.endpoints.role.replace(`{id}`, _id), { params: { ...configuration.auth } });

            const transformed = {
                _id,
                name : employees[_id].name,
                role,
                changed : false
            }

            console.table(transformed);
            scraped.push(transformed);
        }

    } catch (e) {

        console.log("Critical Integration Failure", e);
    }

    console.info(`Integration successful. Integrated data is as follows:`);
    console.info(JSON.stringify(scraped, null, 2));

})();

