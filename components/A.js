import Link from "next/link";
import linkStyle from "../styles/A.module.scss"
export default function ({text, href}) {
    return (
        <Link href={href}>
            <a className={linkStyle.link}>{text}</a>
        </Link>
    )
}
