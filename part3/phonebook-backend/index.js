const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.post("/api/persons", (request, response) => {
  const { name, number } = request.body;
  const id = Math.floor(Math.random() * 100);
  const newPerson = { id, name, number };
  const exists = persons.find((person) => person.name === name);
  if (exists) {
    response.status(400).send({ error: "name must be unique" });
  } else if (name.length === 0 || number.length === 0) {
    response.status(400).send({ error: "name or number is empty" });
  } else {
    persons = [...persons, newPerson];
    response.json(persons);
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

app.get("/info", (request, response) => {
  const totalInfo = persons.length;
  const date = new Date();
  const htmlTemplate = `
  <p>Phonebook has info for ${totalInfo} people</p>
  <p>${date}</p>
  `;
  response.send(htmlTemplate);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
