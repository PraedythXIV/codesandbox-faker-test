import { faker } from "@faker-js/faker"
import { writeFileSync } from "node:fs"

// passengers
let passengersSql = `
    INSERT INTO "passengers" (
        "passportId",
        "email",
        "phone",
        "gender",
        "firstName",
        "lastName",
        "isDisabledPerson",
        "birthDate",
        "birthCountry",
        "citizenshipCountry",
        "addressLine1",
        "addressLine2",
        "zipcode",
        "city",
        "country"
    ) VALUES
`

20 ** 36

for (let i = 0; i < 25; i++) {
  const gender = faker.name.gender(true)
  const country = faker.address.countryCode()
  passengersSql += `(
        '${faker.random.alphaNumeric(20).toUpperCase()}',
        '${faker.unique(faker.internet.email)}',
        '${faker.phone.number()}',
        '${gender}',
        '${faker.name.firstName(gender).replace(/'/g, "''")}',
        '${faker.name.lastName(gender).replace(/'/g, "''")}',
        ${Math.floor(Math.random() * 100) % 30 ? "TRUE" : "FALSE"},
        '${new Date(faker.date.past(faker.random.numeric(2))).toISOString()}',
        '${country}',
        '${
          Math.floor(Math.random() * 100) % 40
            ? country
            : faker.address.countryCode()
        }',
        '${faker.address.streetAddress().replace(/'/g, "''")}',
        '${faker.address.secondaryAddress().replace(/'/g, "''")}',
        '${faker.address.zipCode()}',
        '${faker.address.city().replace(/'/g, "''")}',
        '${
          Math.floor(Math.random() * 100) % 80
            ? country
            : faker.address.countryCode()
        }'
    ),`
}

writeFileSync("./dataPassengers.sql", passengersSql.slice(0, -1), {
  encoding: "utf-8",
  flag: "w",
})

// crewMembers
let crewMembersSql = `
    INSERT INTO "crewMembers" (
        "passportId",
        "gender",
        "firstName",
        "lastName",
        "birthDate",
        "birthCountry",
        "citizenshipCountry",
        "addressLine1",
        "addressLine2",
        "zipcode",
        "city",
        "country",
        "jobType",
        "jobTitle"
    ) VALUES
`

20 ** 36

for (let i = 0; i < 25; i++) {
  const gender = faker.name.gender(true)
  const country = faker.address.countryCode()
  crewMembersSql += `(
        '${faker.random.alphaNumeric(20).toUpperCase()}',
        '${gender}',
        '${faker.name.firstName(gender).replace(/'/g, "''")}',
        '${faker.name.lastName(gender).replace(/'/g, "''")}',
        '${new Date(faker.date.past(faker.random.numeric(2))).toISOString()}',
        '${country}',
        '${
          Math.floor(Math.random() * 100) % 40
            ? country
            : faker.address.countryCode()
        }',
        '${faker.address.streetAddress().replace(/'/g, "''")}',
        '${faker.address.secondaryAddress().replace(/'/g, "''")}',
        '${faker.address.zipCode()}',
        '${faker.address.city().replace(/'/g, "''")}',
        '${
          Math.floor(Math.random() * 100) % 80
            ? country
            : faker.address.countryCode()
        }',
        '${faker.name.jobType()}',
        '${faker.name.jobTitle()}'
    ),`
}

writeFileSync("./dataCrewMembers.sql", crewMembersSql.slice(0, -1), {
  encoding: "utf-8",
  flag: "w",
})

// companies
let companiesSql = `
    INSERT INTO "companies" (
        "name",
        "isLowCost"
    ) VALUES
`

for (let i = 0; i < 500; i++) {
  companiesSql += `(
        '${faker.unique(faker.company.name).replace(/'/g, "''")}',
        ${Math.floor(Math.random() * 100) < 57 ? "TRUE" : "FALSE"}
    ),`
}

writeFileSync("./dataCompanies.sql", companiesSql.slice(0, -1), {
  encoding: "utf-8",
  flag: "w",
})

// airport
let airportSql = `
    INSERT INTO "airport" (
        "name",
        "addressLine1",
        "addressLine2",
        "zipcode",
        "city",
        "country"
    ) VALUES
`

20 ** 36

for (let i = 0; i < 25; i++) {
  const country = faker.address.countryCode()
  airportSql += `(
        '${faker.name.firstName().replace(/'/g, "''")}',
        '${faker.address.streetAddress().replace(/'/g, "''")}',
        '${faker.address.secondaryAddress().replace(/'/g, "''")}',
        '${faker.address.zipCode()}',
        '${faker.address.city().replace(/'/g, "''")}',
        '${
          Math.floor(Math.random() * 100) % 80
            ? country
            : faker.address.countryCode()
        }'
    ),`
}

writeFileSync("./dataAirports.sql", airportSql.slice(0, -1), {
  encoding: "utf-8",
  flag: "w",
})