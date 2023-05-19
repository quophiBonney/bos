import React, {useState} from "react";
import HomeCSS from "./Home.module.css";
import {Container, Row, Col} from "react-bootstrap";
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
function Quote() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleChange = newState => {
    setEditorState(newState);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} md={12} lg={12} id={HomeCSS.editor}>
          <Editor
            editorState={editorState}
            className="bg-dark"
            placeholder="Write your quote here"
            onEditorStateChange={handleChange}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Quote;
