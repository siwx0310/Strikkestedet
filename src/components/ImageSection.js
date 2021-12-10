export default function ImageSection(props) {
    return (
        <>
        <section className="w-full mb-4">
            <article className="grid grid-cols-6 gap-4 flex flex-wrap">
                <img loading="lazy" src={props.mediaasset.url} alt={props.mediaasset.alt} className={"col-span-6 lg:col-span-3 " + ((props.index % 2 > 0) ? "lg:order-2" : "lg:order-1")}></img>
                <div className={"col-span-6 lg:col-span-3 p-16 self-center " + ((props.index % 2 > 0) ? "lg:order-1" : "lg:order-2")}>
                    <span className="font-sans text-sm text-black-60">{props.assetnumber}.</span>
                    <h2 className="font-serif text-xl lg:text-3xl mb-4">{props.header}</h2>
                    <p className="text-black-60">{props.body}</p>
                </div>
            </article>
        </section>
        </>
    );
}