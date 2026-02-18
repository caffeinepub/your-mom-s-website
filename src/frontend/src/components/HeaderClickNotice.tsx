import { X } from 'lucide-react';
import { useEffect } from 'react';

interface HeaderClickNoticeProps {
  message: string;
  onClose: () => void;
}

export function HeaderClickNotice({ message, onClose }: HeaderClickNoticeProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="header-notice glass-surface">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-medium flex-1">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Close"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
