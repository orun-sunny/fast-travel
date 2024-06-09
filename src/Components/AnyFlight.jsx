export default function AnyFlight() {
  return (
    <div className="relative ml-2">
      <select className="select select-info w-[200px] max-w-xs outline-none bg-base-100 rounded-box focus:outline-none border-none shadow-md">
        <option className="my-10 text-2xl w-[250px]">Any flight</option>
        <option className="my-10 text-2xl w-[250px]">Non Stop</option>
      </select>
    </div>
  );
}
