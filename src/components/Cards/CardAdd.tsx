import Card from "./Card";

function CardAdd({title}: {title: string}) {
    return (
    <Card className="flex justify-between items-center cursor-pointer hover:border-blue-300 transition-colors">
        <h2 className="bg-stone-100 rounded">{title}</h2>
        <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/add--v1.png"
            alt="add--v1"
            className="mb-8"
        />
    </Card>
    );
}

export default CardAdd;
