type PropsType = {
  src: string,
  alt: string,
};

export default function Test({src,alt}: PropsType) {
  return (
    <img
      src={src}
      alt={alt}
    />
  );
}
