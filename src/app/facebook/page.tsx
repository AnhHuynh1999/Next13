'use client'
import { useRouter } from "next/navigation"
import Button from "react-bootstrap/Button"

const Facebook = () => {
    const router = useRouter()
    const handleBtn = () => {
        router.push('/')
    }
    return (<div>Facebook page
        <div>
            <Button variant="danger" onClick={() => handleBtn()} >Back home</Button>
        </div>
    </div>)
}

export default Facebook