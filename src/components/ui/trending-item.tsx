import Link from "next/link";

type Props = {
    label: string;
}

export const TrendingItem = ({label}: Props) => {
    return (
        <Link
            href={`/search?q=${encodeURIComponent(label)}`}
            className="group/item"
        >
            <div className="group-hover/item:underline font-bold">{label}</div>
        </Link>
    );
}