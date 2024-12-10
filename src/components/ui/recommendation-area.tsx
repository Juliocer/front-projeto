import { user } from "@/data/user";
import { RecommendationItem} from "./recommendation-item";

export const RecommendationArea = () => {
    return (
        <div className="border bg-gray-500 rounded-3xl">
            <h2 className="text-xl p-6 break-words whitespace-pre-line"> 
               {`De sua opnião 
                do que pode 
                melhorar na instituição`}
            </h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                <RecommendationItem user={user}/>
            </div>
        </div>
    );
}

