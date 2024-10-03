import CardSkeleton from "@/components/ui/card-skeleton";
import Container from "@/components/ui/container";

interface IProps {}

const Loading: React.FC<IProps> = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="space-y-2 mb-16 text-center">
          <h2 className="text-2xl font-bold">Recently Found Items</h2>
          <p>A list of items that have recently found and reported.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((item) => (
            <CardSkeleton key={item + 1} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Loading;
