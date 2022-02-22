import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/header";
import { Text } from "../components/text";

export default function Index() {
  return (
    <div>
      <Header />
      <div data-testid="link-item">
        <Link href="/item">List of Item</Link>
      </div>
      <div data-testid="link-mypage">
        <Link href="/mypage">My Page</Link>
      </div>
      <Text text="bar" />
      <br />
      <Image src="/next.png" alt="next" width="1200" height="719" />
      <Image src="/next-svg.svg" alt="next" width="1000" height="600" />
    </div>
  );
}
