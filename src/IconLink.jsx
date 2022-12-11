
export function IconLink(props) {
  const {name, refer, icon} = props;
  return (<a className="icon-link flex flex-col w-8 sm:w-24 sm:h-20 sm:p-5 rounded-2xl items-center justify-between" href={`#${refer}`}>
    <img src={icon} alt={refer} className="icon w-6 sm:w-12 mb-2" />
    <h3 className="text-slate-500 text-center text-sm hidden sm:block w-12 sm:w-24 flex-1">{name}</h3>
  </a>)
}