import Link from 'next/link';
export function SectionHeader({title,link,href}:{title:string;link?:string;href?:string}){return <div className="section-header"><h2>{title}</h2>{link&&href&&<Link className="text-link" href={href}>{link} →</Link>}</div>}
