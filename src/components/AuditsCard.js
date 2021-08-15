interface AuditsCardProps {
  times: string;
  title: string;
  description: string;
}

const AuditsCard = ({ times, title, description }: AuditsCardProps) => {
  return (
    <div className="mt-5 md:m-2 shadow-lg rounded-2xl w-full md:w-56 p-4 bg-white relative overflow-hidden">
      <p className="text-blue-600 text-2xl font-medium mb-2">{times}</p>
      <p className="text-gray-800 text-lg font-medium">{title}</p>
      <p className="text-gray-400 text-xs">{description}</p>
    </div>
  );
};

export default AuditsCard;
