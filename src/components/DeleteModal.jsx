import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button,Modal } from 'semantic-ui-react'
import { deletePost } from "../redux/actions";

const DeleteModal = ({ post }) => {
  const [open, setOpen] = useState(false);
  const error = useSelector((state) => state.deletePostError)
  const show = () => setOpen(true);
  const close = () => setOpen(false);
  const { push } = useHistory();

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePost(id, close, push))
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
