import Link from "next/link";
import styled from "../styles/Button.module.css";

export default function Button( {info, go} ) {
  return (
      <Link href={go}>
        <a><div className={styled.Button}>{info}</div></a>
      </Link>
  )
}