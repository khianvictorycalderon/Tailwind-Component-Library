import type { SetStateAction } from "react";

interface BasePopUpProps {
  clickStrict?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  theme?: "light" | "dark";
}

function BasePopUp({ clickStrict = false, onClose, children, theme = "light" }: BasePopUpProps) {
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Dim background */}
      <div
        className={`absolute inset-0 ${isDark ? "bg-black opacity-70" : "bg-black opacity-30"}`}
        onClick={() => !clickStrict && onClose()}
      ></div>

      {/* Pop-up content */}
      <div
        className={`relative rounded-lg p-6 shadow-lg z-10 w-80 max-w-full ${
          isDark ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"
        }`}
      >
        {/* Close button */}
        <button
          className={`absolute top-2 right-2 ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-700"
          } cursor-pointer`}
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {children}
      </div>
    </div>
  );
}

// -------------------------------------------
// MessagePopUp

interface MessagePopUpProps {
  message: React.ReactNode | string;
  clickStrict?: boolean;
  theme?: "light" | "dark";
  onClose?: () => void;
}

export function MessagePopUp({
  message,
  clickStrict = false,
  theme = "light",
  onClose = () => {},
}: MessagePopUpProps) {
  return (
    <BasePopUp clickStrict={clickStrict} onClose={onClose} theme={theme}>
      <div className="text-center">
        <p className="mb-4">{message}</p>
        <button
          className={`px-4 py-2 rounded cursor-pointer ${
            theme === "dark"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={onClose}
        >
          Okay
        </button>
      </div>
    </BasePopUp>
  );
}

// -------------------------------------------
// ConfirmPopUp

interface ConfirmPopUpProps {
  message: React.ReactNode | string;
  setValue: React.Dispatch<SetStateAction<boolean>>;
  clickStrict?: boolean;
  theme?: "light" | "dark";
  onClose?: () => void;
}

export function ConfirmPopUp({
  message,
  setValue,
  clickStrict = false,
  theme = "light",
  onClose = () => {},
}: ConfirmPopUpProps) {
  const handleConfirm = () => {
    setValue(true);
    onClose();
  };

  const handleCancel = () => {
    setValue(false);
    onClose();
  };

  return (
    <BasePopUp clickStrict={clickStrict} onClose={onClose} theme={theme}>
      <div className="text-center">
        <p className="mb-4">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded cursor-pointer ${
              theme === "dark"
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            className={`px-4 py-2 rounded cursor-pointer ${
              theme === "dark"
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </BasePopUp>
  );
}

// -------------------------------------------
// PromptPopUp

interface PromptPopUpProps {
  message: React.ReactNode | string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  clickStrict?: boolean;
  theme?: "light" | "dark";
  onClose?: () => void;
}

export function PromptPopUp({
  message,
  value,
  setValue,
  clickStrict = false,
  theme = "light",
  onClose = () => {},
}: PromptPopUpProps) {
  const handleConfirm = () => onClose();
  const handleCancel = () => {
    setValue("");
    onClose();
  };

  return (
    <BasePopUp clickStrict={clickStrict} onClose={onClose} theme={theme}>
      <div className="text-center">
        <p className="mb-4">{message}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`border rounded p-2 w-full mb-4 ${
            theme === "dark" ? "bg-neutral-700 text-white border-neutral-600" : "bg-white text-neutral-800 border-neutral-300"
          }`}
        />
        <div className="flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded cursor-pointer ${
              theme === "dark"
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            className={`px-4 py-2 rounded cursor-pointer ${
              theme === "dark"
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </BasePopUp>
  );
}