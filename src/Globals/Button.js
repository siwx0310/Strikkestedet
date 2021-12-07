import Link from 'next/link';

export default function Button(props){
    console.log(props);
    return (
        <Link href={props.href}>
            <button className="bg-btn transition hover:bg-black font-sans text-xl lg:text-2xl text-white min-w-40 py-4">{props.children}</button>
        </Link>
    )
}