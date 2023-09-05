'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { mutate } from "swr"
interface IProps {
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
    action: string;
    blog: IBlog | null;
    setBlog: (value: IBlog | null) => void;
}

function CreateModal(props: IProps) {
    const { showModalCreate, setShowModalCreate, action, setBlog, blog } = props;
    console.log('blog', blog);
    const [id, setId] = useState<number>()
    const [title, setTitle] = useState<string>()
    const [author, setAuthor] = useState<string>()
    const [content, setContent] = useState<string>()

    useEffect(() => {
        if (blog?.id) {
            setId(blog.id)
            setTitle(blog.title)
            setAuthor(blog.author)
            setContent(blog.content)
        }
    }, [blog])

    const handleSubmit = () => {
        if (!title) {
            toast.error('Not empty title')
            return
        }
        if (!author) {
            toast.error('Not empty author')
            return
        }
        if (!content) {
            toast.error('Not empty content')
            return
        }
        if (action === 'add') {
            fetch("http://localhost:8000/blogs",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({ title, author, content })
                })
                .then((res) => res.json()).then((res => {
                    if (res) {
                        toast.success('Create new blog succeed')
                        handleCloseModal()
                        mutate('http://localhost:8000/blogs')
                    }
                }))
        } else {
            fetch(`http://localhost:8000/blogs/${id}`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "PUT",
                    body: JSON.stringify({ title, author, content })
                })
                .then((res) => res.json()).then((res => {
                    if (res) {
                        toast.success('Update blog succeed')
                        handleCloseModal()
                        mutate('http://localhost:8000/blogs')
                    }
                }))
        }

    }
    const handleCloseModal = () => {
        setTitle('')
        setContent('')
        setAuthor('')
        setBlog(null)
        setShowModalCreate(false)
    }
    return (

        <Modal
            show={showModalCreate}
            onHide={() => handleCloseModal()}
            backdrop="static"
            keyboard={false}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="..." value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="..." value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleCloseModal()}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSubmit()}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateModal;