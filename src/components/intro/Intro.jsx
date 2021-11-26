import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="left-wrapper">
          <h2 className="hello">Hello, Developers</h2>
          <h2 className="intro">My Name is</h2>
          <h1 className="name">Ameya Lambat</h1>
          <div className="title">
            <div className="title-wrapper">
              <div className="title-item">CS Student</div>
              <div className="title-item">Web Developer</div>
              <div className="title-item">UI/ UX Designer</div>
              <div className="title-item">Music Producer</div>
              <div className="title-item">Sport Climber</div>
            </div>
          </div>
          <div className="desc">*Write about yourself here*</div>
        </div>
      </div>
      <div className="right">right</div>
    </div>
  );
};

export default Intro;
