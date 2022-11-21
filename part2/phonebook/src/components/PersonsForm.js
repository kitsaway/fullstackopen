const PersonsForm = ({
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
  handleAddPerson,
}) => {
  return (
    <form onSubmit={handleAddPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} required />
      </div>
      <div>
        number:
        <input value={newNumber} type="tel" onChange={handleNumberChange} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonsForm;
