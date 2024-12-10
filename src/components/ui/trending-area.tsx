import { TrendingItem} from "./trending-item";

export const TrendingArea = () => {
    return (
        <div className="border bg-gray-500 dark:bg-gray-500 rounded-3xl shadow-lg transition-all duration-300">
            <h2 className="text-xl p-6 break-words whitespace-pre-line">
                {`Todas as suas chamados`}
            </h2>
            <div className="flex flex-col p-6 pt-0">
                <TrendingItem label="Chamados" />
            </div>
        </div>
    );
}

