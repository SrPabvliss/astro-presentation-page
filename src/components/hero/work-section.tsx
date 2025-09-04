import workCards from "@/constants/work-cards";
import WorkCard from "./work-card";

const WorkSection = () => {
	return (
		<div className="flex justify-between gap-8 w-full">
			{workCards.map((card, index) => (
				<WorkCard key={index} {...card} />
			))}
		</div>
	);
};

export default WorkSection;
