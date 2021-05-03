import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Form, Input, Button } from "antd";

import { addNote } from "../Js/Actions/Actions";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  }
};

const AddNoteForm = () => {
  const [companyInput, setCompanyInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addNote({
        id: Math.random(),
        name: nameInput,
        company: companyInput,
        note: noteInput
      })
    );
    setCompanyInput("");
    setNameInput("");
    setNoteInput("");
  };

  return (
    <Form {...layout} name="nest-messages">
      <Form.Item label="Company" required="true">
        <Input
          placeholder="Please enter your company's name"
          value={companyInput}
          onChange={(e) => setCompanyInput(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Name" required="true">
        <Input
          placeholder="Please enter your name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Note">
        <Input.TextArea
          placeholder="Please enter your company's name"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" onClick={handleAdd}>
          Add Note
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddNoteForm;
