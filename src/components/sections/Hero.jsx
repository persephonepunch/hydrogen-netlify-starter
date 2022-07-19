import {Image, Link, Video} from '@shopify/hydrogen';


export function Hero({
  byline,
  cta,
  handle,
  heading,
  height,
  loading,
  spread,
  spreadSecondary,
  top,
}) {
  return (

    
    <Link to={`/collections/${handle}`}>
      <section
        className={`relative justify-end flex flex-col w-full ${
          top && '-mt-nav'
        } ${
          height === 'full'
            ? 'h-screen'
            : 'aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]'
        }`}
      >
            <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">

          <iframe name="footjoy" className="y-iframe" src="https://footjoy2.netlify.app/"></iframe>
          </div>
    
  
    </Link>
  );
}