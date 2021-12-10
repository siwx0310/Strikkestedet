export default function Selector(props) {
  return (
    <nav>
      <h3 aria-label="vælg brand">Brand</h3>
      <ul>
        {props.data.brand
          ? props.data.brand.map((item) => {
              return (
                <a className="block" key={item.title}>
                  {item.title}
                </a>
              );
            })
          : null}
        {props.data.fiber
          ? props.data.fiber.map((item) => {
              return (
                <a className="block" key={item.title}>
                  {item.title}
                </a>
              );
            })
          : null}
        {props.data.needles
          ? props.data.needles.map((item) => {
              return (
                <a className="block" key={item.title}>
                  {item.title}
                </a>
              );
            })
          : null}
      </ul>
    </nav>
  );
}
