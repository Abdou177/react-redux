import React from "react";
import { useDispatch } from "react-redux";

import { List, Avatar, Button } from "antd";

import { deleteNote } from "../Js/Actions/Actions";

const Note = ({ list }) => {
  const dispatch = useDispatch();
  return (
    <List className="demo-loadmore-list" itemLayout="horizontal" size="small">
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={list.name}
          description={list.company}
        />
        {list.note}
        <br />
        <br />
        <Button danger onClick={() => dispatch(deleteNote(list.id))}>
          Delete
        </Button>
      </List.Item>
    </List>
  );
};

export default Note;
