import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function ThreadForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Write an interesting title!" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder={"Write here your thread title..."} />
            </Form.Group>

            <Button type={"submit"} value={"Submit"}>Submit</Button>

        </Form>
    );
}

export default ThreadForm;