interface TitleProps {
  title: string;
  content?: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const { title, content } = props;

  return (
    <div className="mb-0">
      <h2 className="text-center font-bold lg:text-4xl text-2xl text-zinc-900">
        {title}
      </h2>
      <p className="text-center max-w-full mx-auto mt-2.5 text-lg mb-5 italic">
        {content}
      </p>
    </div>
  );
};

export default Title;
