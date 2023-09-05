'use client'
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
    return (
        <>
            <div className='mx-3' style={{ display: 'flex', justifyContent: "space-between" }}>
                <h3>Table Blogs</h3>
                <Button variant='secondary' onClick={() => setShowModalCreate(true)}>Add New</Button>
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
                    {blogs.map(blog => (<tr key={blog.id}>
                        <td>{blog.id}</td>
                        <td>{blog.title}</td>
                        <td>{blog.author}</td>
                        <td>
                            <Button >View</Button>
                            <Button variant='warning' className='mx-3'>Edit</Button>
                            <Button variant='danger' className='mx-3'>Delete</Button>
                        </td>
                    </tr>))}

                </tbody>
            </Table>
            <CreateModal setShowModalCreate={setShowModalCreate} showModalCreate={showModalCreate} />
        </>

    )
}

export default AppTable