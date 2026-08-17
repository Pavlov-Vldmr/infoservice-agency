import "./Slide.scss";

function Slide(props: { title?: string; text?: string; imgURL?: string }) {
  return (
    <>
      <div className="slide-obj">
        <img src={props.imgURL} className="slide-obj__img "></img>
        <div className="slide-obj__text ">
          <span className="pseudo p-1 text_center">{props.title}</span>
          {/* <p>{props.text}</p> */}
        </div>
      </div>
    </>
  );
}

export default Slide;
