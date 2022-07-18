import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {useForm} from "react-hook-form";

function ThreadForm(props) {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const url = 'http://127.0.0.1:8000/api/threads/'

    const onSubmit = (data) => {

        data.board = props.board

        console.log(url)

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Write an interesting title!" {...register('subject', {
                    required: true,
                    maxLength: 50
                })} />
                { errors.subject?.type === 'required' && <p>Title is required!</p> }
                { errors.subject?.type === 'maxLength' && <p>Title must contain less than 50 character</p> }
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder={"Write here your thread content..."} {...register('content', {
                    required: true,
                    maxLength: 250
                })} />
                { errors.content?.type === 'required' && <p>Don't your have anything interesting to say? Content is required!</p> }
                { errors.content?.type === 'maxLength' && <p> Come on man, summarize your sh!t. Content must contain less than 250 character</p> }
            </Form.Group>

            <Button type={"submit"} value={"Submit"}>Submit</Button>

        </Form>
    );
}

export default ThreadForm;