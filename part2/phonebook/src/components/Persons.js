const Persons = ({ persons, handleDelete }) => (
  <>
    <table>
      <tbody>
        {persons.map((person) => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td><button onClick={() => handleDelete(person.id, person.name)}>delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default Persons;
