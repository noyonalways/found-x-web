import { SearchIcon } from "@/components/icons";
import Container from "@/components/ui/container";
import { Input } from "@nextui-org/input";

interface IProps {}

const Landing: React.FC<IProps> = () => {
  return (
    <section className="bg-[url('https://i.ibb.co.com/ccSKD8W/pexels-scottwebb-532561.webp')] bg-cover bg-center h-[calc(100vh-64px)]">
      <Container>
        <div className="pt-32">
          <form className="max-w-lg mx-auto">
            <Input
              aria-label="Search"
              placeholder="Search..."
              size="lg"
              type="text"
              startContent={
                <SearchIcon className="pointer-events-none flex-shrink-0" />
              }
            />
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Landing;
