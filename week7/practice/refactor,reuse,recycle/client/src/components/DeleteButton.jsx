import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
  const { id, deleteCallBack } = props;

  const handleDelete = () => {
    axios
      .delete("http://localhost:5000/api/products/" + id)
      .then((res) => deleteCallBack())
      .catch((err) => console.log(err));
  };

  return (
    <button onClick={handleDelete}> Delete </button>
  );
};

export default DeleteButton;