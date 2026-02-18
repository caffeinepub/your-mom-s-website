interface IosScrollIndicatorProps {
  visible: boolean;
  thumbHeight: number;
  thumbTop: number;
}

export function IosScrollIndicator({ visible, thumbHeight, thumbTop }: IosScrollIndicatorProps) {
  return (
    <div
      className="ios-scroll-indicator"
      style={{
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className="ios-scroll-thumb"
        style={{
          height: `${thumbHeight}px`,
          transform: `translateY(${thumbTop}px)`,
        }}
      />
    </div>
  );
}
