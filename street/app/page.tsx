import "/app/page.css";
import Image from 'next/image'
import userIcon from "/public/account_circle.svg"
export default function Home() {
  return (
    <button className="userButton">
    <Image src={userIcon} alt="User" className="user-icon" />
  </button>
  );
}
