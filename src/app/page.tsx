import Link from "next/link";
import x from '@/styles/app.module.css';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Home page',
  description: 'Description',
  
}
export default function Home() {

  return (
    <div>
      <ul>
        <li className={x['red']}>
          <Link href="/tiktok">Tiktok</Link>
        </li>
        <li >
          <Link href="/facebook">Facebook</Link>
        </li>
        <li >
          <Link href="/youtube">Youtube</Link>
        </li>
      </ul>
    </div>
  )
}
