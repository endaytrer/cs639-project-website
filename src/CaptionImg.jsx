export class CaptionGenerator {
  constructor() {
    this.i = 0;
  }
  instantiate(src, caption) {
    this.i += 1;
    const width = 100 / src.length;
    const margin = 10 * (src.length - 1);
    return (<div className="flex flex-col items-center w-full">
    <div className="flex justify-between w-full">
      {
        src.map((val, idx) => <img key={idx} className="object-contain" src={val} alt={caption} style={{width: `calc(${width}% - ${margin}px)`}}/>)
      }
    </div>
    <div className='mt-2 mb-5 italic font-serif'><b>Figure {this.i}</b>: {caption}</div>
  </div>);
  }
}