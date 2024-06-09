const Banner = () => {
  return (
    <div
      className=" absolute"
      style={{
        backgroundImage: `url('https://habgs-content.s3.ap-south-1.amazonaws.com/habgs-partners-banners/default-image/default_image-8.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh", // Set the height as needed
        borderRadius: "", // Adjust border radius for wave-like shape
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0", // Position at the top
          left: "0",
          width: "100%",
          height: "10%", // Adjust height of the wave
          background:
            "linear-gradient(to top right, transparent 100%, white 50%)",
          transform: "scaleY(-1)", // Flip gradient to make it wave-like
        }}
      />
      <h3 className="font-bold text-center text-5xl text-white max-w-3xl mx-auto absolute top-[40%] left-[30%]">
        Discover the real value of travel
      </h3>
    </div>
  );
};

export default Banner;
