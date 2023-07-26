'use client';
import PortfolioCard from '@/components/PortfolioCard';
import { Heading } from '@/components/ui/heading';
import PortfolioImg from 'assets/Portfolio.png';

export default function Portfolio({ projects }: { projects: Project[] }) {
  return (
    <section id="portfolio" className="container my-40 lg:my-56 ">
      <Heading src={PortfolioImg} />
      <div className="flex flex-wrap justify-evenly gap-x-4 gap-y-10 max-sm:justify-center">
        {projects.map(
          (packageData: { display: any; name: any }) =>
            packageData.display && (
              <PortfolioCard {...packageData} key={packageData.name} />
            )
        )}
      </div>
    </section>
  );
}
