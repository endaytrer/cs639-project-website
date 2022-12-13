export class Citation {
  constructor() {
    this.citations = [];
  }
  cite(source) {
    const i = this.citations.length + 1;
    this.citations.push(source);
    return <a href={`#r${i}`} className="citation relative inline-block">
        <sup>[{i}]</sup>
        <span className="tooltip-text">{source}</span>
      </a>
  }
  references() {
    return <ul>
      {this.citations.map((val, idx) => (
        <li id={`r${idx + 1}`} key={idx} className=" text-gray-400 text-sm">[{idx + 1}] {val}</li>
      ))}
    </ul>
  }
}