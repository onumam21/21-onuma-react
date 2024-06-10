import img from "../assets/pic-01.jpg";

const Owner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="self-center text-5xl font-extrabold">Nann-Genmate F-21</h1>
      <img
        className="h-50 w-32 object-cover rounded-full"
        src={img}
        alt="Profile Picture"
      />
      <h3 className="self-center">My Short Biography</h3>
      <p className="max-w-md">
        I'm deeply passionate about technology, striving for the top echelons of
        the industry. I harbor no love for animals or children, and I detest
        being ignored.
      </p>
    </div>
  );
};

export default Owner;
