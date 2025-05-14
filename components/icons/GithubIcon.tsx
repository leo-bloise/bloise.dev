import Image from "next/image";

type Props = {
    width: number;
    height: number;
}
export default function GithubIcon({ height, width }: Props) {
    return <Image src={"/github-mark/github-mark-white.png"} width={width} height={height} alt="Github"></Image>
}