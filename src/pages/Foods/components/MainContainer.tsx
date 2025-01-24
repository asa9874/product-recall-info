import Card from "./Card";

function MainContainer() {
  return (
    <div className="place-items-center">
      <div className="bg-neutral-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-3/4 place-items-center shadow-xl rounded-md mt-10 p-3 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default MainContainer;