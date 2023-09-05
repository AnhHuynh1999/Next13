'use client'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
interface IProps {
    blogs: IBlog[]
}
const AppTable = (props: IProps) => {
    const { blogs } = props;
    console.log('props', props);
    return (
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
    )
}

export default AppTable