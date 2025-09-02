import './TextBlock.css'

export default function TextBlock(props) {
  const { text, title, white, with_bg, bg_image } = props;

  const style = with_bg
    ? {
        backgroundImage: `url(${bg_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <div className="services-lest-text-block" style={style}>
      {!white && <div className="services-lest-text-block-blur"></div>}

      <div className={white ? 'services-lest-text-block-main-container-white' : 'services-lest-text-block-main-container'}>
        <div className="services-lest-text-block-title">
          {props.img && (
            <div className="services-lest-text-block-title-img">
              <img src={props.img} alt="" />
            </div>
          )}
          <h1>{title}</h1>
        </div>

        <div className="services-lest-text-block-text">
          {text.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
