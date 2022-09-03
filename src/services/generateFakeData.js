"use strict";

var fs = require("fs");
var fakerModule = require("@faker-js/faker");
var _ = require("lodash");

const properties = [];
const images = _.shuffle(require("./images.json"));
var j = 0;

for (let i = 0; i < 100; i++) {
  var property = {
    id: i,
    bed: _.random(3, 8),
    bath: _.random(3, 8),
    city: "New York City",
    price: _.random(1, 100) * 100000,
    email: fakerModule.faker.internet.email(),
    address: `${fakerModule.faker.address.street()}, ${fakerModule.faker.address.zipCode()}`,
    lat: fakerModule.faker.address.latitude(40.8101, 40.648, 4),
    long: fakerModule.faker.address.longitude(-73.6208, -74.0252, 4),
    images: images[j],
  };
  properties.push(property);

  j++;
  if (j == images.length) j = 0;
}

fs.writeFile(
  "./src/services/fakeData.json",
  JSON.stringify(properties),
  "utf8",
  () => console.log("done")
);
