import ribbon from './ribbon.module.css';
export default function Ribbon({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${ribbon.ribbon} ${ribbon['ribbon-top-left']}`}>
      <div>{children}</div>
    </div>
  );
}
