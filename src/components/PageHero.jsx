import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function PageHero({kicker,title,description,number}) { return <section className="page-hero"><div className="container page-hero-inner"><div><span className="eyebrow">{kicker}</span><h1>{title}</h1><p>{description}</p><Link className="primary-btn" to="/contact">Work with us <ArrowUpRight size={17}/></Link></div><div className="page-hero-number">{number}<span> / THE SOCIAL LANE</span></div></div></section>; }
