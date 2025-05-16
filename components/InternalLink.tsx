import Link from "next/link";
import { ReactNode } from "react";
import { Url } from "url";

type Props = {
    href: string;
    children: ReactNode;
}

export default function InternalLink({ href, children }: Props) {
    return <Link href={href}>
        {children}
    </Link>
}