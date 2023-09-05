'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CreateModal from './create.modal';
interface IProps {
    blogs: IBlog[]
}
const AppTable = (props: IProps) => {
    const { blogs } = props;
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false)
    const [action, setAction] = useState<string>('add')
    const [blogSelect, setBlogSelect] = useState<IBlog | null>(null)

    const handleEdit = (item: IBlog) => {
        setBlogSelect(item)
        setShowModalCreate(true)
        setAction('edit')
    }

    return (
        <>
            <div className='mx-3' style={{ display: 'flex', justifyContent: "space-between" }}>
                <h3>Table Blogs</h3>
                <Button variant='secondary' onClick={() => {
                    setAction('add')
                    setShowModalCreate(true)
                }}>Add New</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs?.sort((a, b) => b.id - a.id).map(blog => (<tr key={blog.id}>
                        <td>{blog.id}</td>
                        <td>{blog.title}</td>
                        <td>{blog.author}</td>
                        <td>
                            <Link href={`/blogs/${blog.id}`} className={'btn btn-primary'}>View</Link>
                            <Button variant='warning' className='mx-3' onClick={() => handleEdit(blog)}>Edit</Button>
                            <Button variant='danger' className='mx-3'>Delete</Button>
                        </td>
                    </tr>))}

                </tbody>
            </Table>
            <CreateModal setBlog={setBlogSelect} blog={blogSelect} action={action} setShowModalCreate={setShowModalCreate} showModalCreate={showModalCreate} />
        </>

    )
}

export default AppTable