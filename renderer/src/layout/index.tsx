export const AppLayout = (props: { children: React.ReactNode }) => {
  return (
    <main className='flex justify-center w-screen h-screen bg-gray-100 relative'>
      {props.children}
    </main>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};

export const NavLayout = ({ children }: LayoutProps) => {
  return <div className='h-full w-full fiexd'>{children}</div>;
};
