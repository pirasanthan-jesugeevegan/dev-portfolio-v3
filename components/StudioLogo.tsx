import Image from 'next/image';
import { LogoProps } from 'sanity';
function Logo(props: LogoProps) {
  const { renderDefault } = props;
  return (
    <div className="flex">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://cdn.sanity.io/images/vsjc2cwt/production/587f2d39c654eef3daa04a9001373a002b23b2a5-400x400.png"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}
export default Logo;
