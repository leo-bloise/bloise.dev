import Paragraph from "@/components/Paragraph";
import TraingleLoading from "@/components/TriangleLoading";

export default function Loading() {
    return <div className="flex mt-6 flex-col items-center gap-y-10">
        <TraingleLoading />
        <Paragraph className="font-bold">Loading your experience</Paragraph>
    </div>
}
