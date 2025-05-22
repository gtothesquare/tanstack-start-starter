export const PageLayout = ({ children }) => {
  return (
    <>
      <main className="flex flex-col grow bg-black">{children}</main>
    </>
  );
};
