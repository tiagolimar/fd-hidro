type ContainerProps = {
  children: React.ReactNode;
};

const Container = (children: ContainerProps) => {
  console.log(children)
  return (
    <div className="border shadow-lg">
      {children.children}
    </div>
  )
}

export default Container