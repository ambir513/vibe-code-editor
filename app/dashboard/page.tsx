import EmptyState from "@/components/ui/EmptyState";
import AddNewButton from "@/features/dashboard/components/AddNewButton";
import AddRepoButton from "@/features/dashboard/components/AddRepoButton";

const Page = () => {
  const playgrounds: any[] = [];
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-4 py-10">
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <AddNewButton />
        <AddRepoButton />
      </div>
      <div className="mt-10 flex w-full flex-col items-center justify-center">
        {playgrounds && playgrounds.length === 0 ? (
          <EmptyState
            title="No projects found"
            description="Create a new project to get started"
            imageSrc="/empty-state.svg"
          />
        ) : (
          // todo play playground tab
          <p>Playground Table</p>
        )}
      </div>
    </div>
  );
};

export default Page;
