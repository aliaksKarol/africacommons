import { Description } from "./components/Description";
import { FollowUsButtons } from "./components/FollowUsButtons";
import { Logo } from "./components/Logo";
import { Series } from "./components/SeriesBlock";
import { Title } from "./components/Title";

const Article = () => (
  <div className='flex flex-wrap md:flex-nowrap text-customGray px-4 mb-10'>
    <Logo />
    <div className='w-full md:w-3/4 md:pl-4'>
      <Title />
      <Description />
      <hr className='my-4' />
      <FollowUsButtons />
      <hr className='my-4' />
      <Series />
    </div>
  </div>
);

export default Article;
