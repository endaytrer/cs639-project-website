
export function IconLink(props) {
  const {name, refer, icon} = props;
  return (<a className="icon-link flex flex-col w-28 h-20 p-5 rounded-2xl items-center justify-between" href={`#${refer}`}>
    <img src={icon} alt={refer} className="icon w-10 mb-2" />
    <h3 className="text-slate-500 text-center text-sm w-28 flex-1">{name}</h3>
  </a>)
}