interface InitialLoadSpinnerProps {
  visible: boolean;
}

export function InitialLoadSpinner({ visible }: InitialLoadSpinnerProps) {
  if (!visible) return null;

  return (
    <div className="initial-load-overlay">
      <div className="retro-spinner">
        <div className="retro-spinner-dot retro-spinner-dot-1"></div>
        <div className="retro-spinner-dot retro-spinner-dot-2"></div>
        <div className="retro-spinner-dot retro-spinner-dot-3"></div>
        <div className="retro-spinner-dot retro-spinner-dot-4"></div>
        <div className="retro-spinner-dot retro-spinner-dot-5"></div>
        <div className="retro-spinner-dot retro-spinner-dot-6"></div>
        <div className="retro-spinner-dot retro-spinner-dot-7"></div>
        <div className="retro-spinner-dot retro-spinner-dot-8"></div>
      </div>
    </div>
  );
}
