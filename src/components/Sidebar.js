import {list} from "postcss";


export default function Sidebar(sidebar_brand) {
console.log(sidebar_brand.data)
    return (<div>
        <div><h3>Sidebar</h3></div>
            {sidebar_brand.data.map((brand, index) => {
            return (
                <span className="block" key={brand.title}>{brand.title}</span>
            )
            })}

        </div>

    )
}