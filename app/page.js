import { Hero } from "@/components/hero";
import { NewsLetter } from "@/components/news-letter";
import { Pricing } from "@/components/pricing";
import { TopBlog } from "@/components/top-blog";

export default function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>

      <section>
        <TopBlog />
      </section>

      <section>
        <NewsLetter />
      </section>
      
      <section>
        <Pricing />
      </section>

    </div>
  );
}
