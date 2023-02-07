interface IProp {
  title: string;
  children: any;
}

const Section = ({ title, children }: IProp) => (
  <>
    <h1>{title}</h1>
    {children}
  </>
);

export default Section;
