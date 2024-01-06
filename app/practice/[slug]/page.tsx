import SecondOrder from "@/app/models/SecondOrder";

export default function Page({ params }: { params: { slug: string } }) {
    switch (params.slug) {
        case 'second-order-thinking': return <SecondOrder />
        default: return <div />
    }
}