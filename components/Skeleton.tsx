import { ReactNode } from "react";

type Props = {
    height: number;
    qtt?: number;
    containerStyle?: string;
}

export default function Skeleton({ height, qtt = 1, containerStyle = "" }: Props) {
    if (qtt == 1) return <div style={{
        height,
    }} className="w-full skeleton rounded-md"></div>
    const skeletons: ReactNode[] = [];
    for (let index = 0; index < qtt; index++) {
        skeletons.push(<Skeleton height={height} />)
    }
    return <div className={`flex flex-col gap-y-6 ${containerStyle}`}>
        {skeletons.map(s => s)}
    </div>
}