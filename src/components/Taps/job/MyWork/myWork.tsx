import PortfolioTabs from './myWorksProps';

const portfolioItems = {
  all: [
    {
      src: 'https://cdn.prod.website-files.com/6292458ea6c918a1ddcb2539/629a3803315807b146e03177_portfolio-tbnl-06.jpg',
      href: '/projects/nature-project',
      name: 'Nature Project',
      category: 'developement',
    },
    {
      src: 'https://cdn.prod.website-files.com/6292458ea6c918a1ddcb2539/629a379f8884f5d0df02a8cb_portfolio-main-03.jpg',
      href: '/projects/photographero',
      name: 'Photographero',
      category: 'web',
    },
    {
      src: 'https://cdn.prod.website-files.com/6292458ea6c918a1ddcb2539/629a3711c7b47338beb69975_portfolio-tbnl-04.jpg',
      href: '/projects/snap-app',
      name: 'Snap App',
      category: 'mobile app',
    },
    {
      src: 'https://cdn.prod.website-files.com/6292458ea6c918a1ddcb2539/629a3645d64278b3e6962f3e_portfolio-tbnl-05.jpg',
      href: '/projects/style-app',
      name: 'Style App',
      category: 'mobile app',
    },
    {
      src: 'https://cdn.prod.website-files.com/6292458ea6c918a1ddcb2539/629a361032964bdc0fd4b2ba_portfolio-tbnl-02.jpg',
      href: '/projects/genesis-project',
      name: 'Genesis Project',
      category: 'web',
    },
    {
      src: 'https://cdn.prod.website-files.com/6292458ea6c918a1ddcb2539/629a35eab68e0394b9984f9d_portfolio-tbnl.jpg',
      href: '/projects/rebecca-time',
      name: 'Rebecca Time',
      category: 'developement',
    },
  ],
  developement: [
    {
      src: 'https://cdn.prod.website-files.com/6292458ea6c918a1ddcb2539/629a3803315807b146e03177_portfolio-tbnl-06.jpg',
      href: '/projects/nature-project',
      name: 'Nature Project',
      category: 'developement',
    },
    {
      src: 'https://cdn.prod.website-files.com/6292458ea6c918a1ddcb2539/629a35eab68e0394b9984f9d_portfolio-tbnl.jpg',
      href: '/projects/rebecca-time',
      name: 'Rebecca Time',
      category: 'developement',
    },
  ],
  web: [
    {
      src: 'https://cdn.prod.website-files.com/6292458ea6c918a1ddcb2539/629a379f8884f5d0df02a8cb_portfolio-main-03.jpg',
      href: '/projects/photographero',
      name: 'Photographero',
      category: 'web',
    },
    {
      src: 'https://cdn.prod.website-files.com/6292458ea6c918a1ddcb2539/629a361032964bdc0fd4b2ba_portfolio-tbnl-02.jpg',
      href: '/projects/genesis-project',
      name: 'Genesis Project',
      category: 'web',
    },
  ],
  'mobile app': [
    {
      src: 'https://cdn.prod.website-files.com/6292458ea6c918a1ddcb2539/629a3711c7b47338beb69975_portfolio-tbnl-04.jpg',
      href: '/projects/snap-app',
      name: 'Snap App',
      category: 'mobile app',
    },
    {
      src: 'https://cdn.prod.website-files.com/6292458ea6c918a1ddcb2539/629a3645d64278b3e6962f3e_portfolio-tbnl-05.jpg',
      href: '/projects/style-app',
      name: 'Style App',
      category: 'mobile app',
    },
  ],
};

export default function Home() {
  return (
    <div>
      <PortfolioTabs items={portfolioItems} />
    </div>
  );
}
