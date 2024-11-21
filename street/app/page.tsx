import "/app/page.module.css";
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import userIcon from "/public/account_circle.svg"
export default function Home() {
  const router = useRouter()
  return (
    <button className="userButton" onClick={() => router.push('/profile')}>
    <Image src={userIcon} alt="User" className="user-icon" />
  </button>
  );
}
