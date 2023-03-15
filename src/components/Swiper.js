function Swiper({ children }) {
  return (
    <div className="overflow-y-scroll flex flex-col gap-8 snap-y pb-20 hide-scrollbar">
      {children}
    </div>
  );
}

export default Swiper;
