import Image from "next/image";

interface Props {
  title: string;
  description: string;
  imageSrc?: string;
}
const EmptyState = ({ title, description, imageSrc }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Image
        src={imageSrc!}
        alt={title}
        width={48}
        height={48}
        className="mb-4 h-48 w-48"
      />
      <h2 className="text-xl font-semibold text-gray-500">{title}</h2>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default EmptyState;
