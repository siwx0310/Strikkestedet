import Selector from "./Selector";

export default function Sidebar(props) {
  return (
    <div className="col-span-2">
      <div>
        <h3>Reset placeholder</h3>
      </div>
      <Selector data={props} />
    </div>
  );
}
