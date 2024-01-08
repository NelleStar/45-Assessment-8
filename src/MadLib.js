const MadLib = ({ id, onDelete, madLibContent }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <ul>
      <li>
        {madLibContent}
        <button onClick={handleDelete}>X</button>
      </li>
    </ul>
  );
};

export default MadLib;
