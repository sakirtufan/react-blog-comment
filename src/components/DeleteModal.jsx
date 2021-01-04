import React, { useState } from "react";
import { Button,Modal } from 'semantic-ui-react'
import { api } from "../api";

const DeleteModal = ({ post,push }) => {
  const [open, setOpen] = useState(false);
  const [error,setError] = useState('');
  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const handleDelete = (id) => {
    api().delete('/posts/' + id)
      .then((response) =>{
        setError('');
        // modal close
        close();
        // push to home
        push('/')
      })
      .catch(() =>{
        setError('Error while deleting');
      })
  }

  return (
    <React.Fragment>
      <Button color="red" onClick={show}>Delete Post</Button>
      <Modal size="mini" open={open} close={close}>
        <Modal.Header>Delete the Post</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete <b>{post.title}</b></p>
          {error && <p>{error}</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={close}>Cancel</Button>
          <Button positive icon="delete" labelPosition="right" content='Delete' onClick={()=>handleDelete(post.id)}/>
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteModal;
