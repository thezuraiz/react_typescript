import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ShadCarousal = () => {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <h3 className="py-3 italic text-xl font-medium text-center">
        Shad CN Carousal
      </h3>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img
              src={
                "https://i.ytimg.com/vi/fZPgBnL2x-Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB2hbhUEcv52h8eq2L1X51N-iq1QQ"
              }
              alt=""
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src={
                "https://i.ytimg.com/vi/fZPgBnL2x-Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB2hbhUEcv52h8eq2L1X51N-iq1QQ"
              }
              alt=""
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src={
                "https://i.ytimg.com/vi/fZPgBnL2x-Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB2hbhUEcv52h8eq2L1X51N-iq1QQ"
              }
              alt=""
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ShadCarousal;
