export function Contact(props) {
  const {name, email, github, avatarUrl} = props;
  return (<div className="w-64 h-60 p-6 lg:p-0 bg-slate-800 mx-3 rounded-lg drop-shadow-xl flex flex-col lg:flex-row justify-between lg:items-center flex-1 overflow-hidden">
    <div className="avatar rounded-full lg:rounded-none w-16 lg:w-32 xl:w-48 h-16 lg:h-full bg-white bg-cover bg-center self-center" style={{backgroundImage: `url(${avatarUrl})`}}></div>
    <div className="lg:flex-1 lg:p-6">
      <div className="text-xl font-bold text-blue-200 mb-3">{name}</div>
      <div className="text-base">
        <b>Email: </b><a href={`mailto:${email}`}>{email}</a>
        <br />
        <b>GitHub: </b><a href={`https://github.com/${github}`}>{github}</a>
      </div>
    </div>
  </div>)
}