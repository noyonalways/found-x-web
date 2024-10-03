import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import { getRecentPosts } from "@/services/recent-posts";
import { IPost } from "@/types";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

interface IProps {}

const RecentPosts: React.FC<IProps> = async () => {
  const { data: posts } = await getRecentPosts();

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-2 mb-16 text-center">
          <h2 className="text-2xl font-bold">Recently Found Items</h2>
          <p>A list of items that have recently found and reported.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {posts.map((post: IPost) => (
            <Card key={post._id} {...post} />
          ))}
        </div>

        <div className="flex justify-center ">
          <Link href={"/found-items"}>
            <Button>See All</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default RecentPosts;
