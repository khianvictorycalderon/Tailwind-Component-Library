import { useState } from "react";

// ----------------------
// Message
// ----------------------
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
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`absolute inset-0 ${isDark ? "bg-black opacity-70" : "bg-black opacity-30"}`}
        onClick={() => !clickStrict && onClose()}
      />

      <div
        className={`relative rounded-lg p-6 shadow-lg z-10 w-80 max-w-full ${
          isDark ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"
        }`}
      >
        <button
          className={`absolute top-2 right-2 cursor-pointer ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={onClose}
        >
          ✕
        </button>

        <div className="text-center">
          <p className="mb-4">{message}</p>
          <button
            className={`px-4 py-2 rounded cursor-pointer ${
              isDark ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
            onClick={onClose}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

// ----------------------
// Confirm
// ----------------------
interface ConfirmPopUpProps {
  message: React.ReactNode | string;
  clickStrict?: boolean;
  theme?: "light" | "dark";
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function ConfirmPopUp({
  message,
  clickStrict = false,
  theme = "light",
  onConfirm = () => {},
  onCancel = () => {},
}: ConfirmPopUpProps) {
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`absolute inset-0 ${isDark ? "bg-black opacity-70" : "bg-black opacity-30"}`}
        onClick={() => !clickStrict && onCancel()}
      />

      <div
        className={`relative rounded-lg p-6 shadow-lg z-10 w-80 max-w-full ${
          isDark ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"
        }`}
      >
        <button
          className={`absolute top-2 right-2 cursor-pointer ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={onCancel}
        >
          ✕
        </button>

        <div className="text-center">
          <p className="mb-4">{message}</p>

          <div className="flex justify-center gap-4">
            <button
              className={`px-4 py-2 rounded cursor-pointer ${
                isDark ? "bg-green-600 hover:bg-green-700" : "bg-green-500 hover:bg-green-600"
              } text-white`}
              onClick={onConfirm}
            >
              Confirm
            </button>

            <button
              className={`px-4 py-2 rounded cursor-pointer ${
                isDark ? "bg-red-600 hover:bg-red-700" : "bg-red-500 hover:bg-red-600"
              } text-white`}
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------
// Prompt
// ----------------------
interface PromptPopUpProps {
  message: React.ReactNode | string;
  clickStrict?: boolean;
  theme?: "light" | "dark";
  onConfirm?: (input: string) => void;
  onCancel?: () => void;
}

export function PromptPopUp({
  message,
  clickStrict = false,
  theme = "light",
  onConfirm = (_input: string) => {},
  onCancel = () => {},
}: PromptPopUpProps) {
  const isDark = theme === "dark";
  const [input, setInput] = useState<string>("");

  const handleConfirm = () => onConfirm(input);
  const handleCancel = () => {
    setInput("");
    onCancel();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`absolute inset-0 ${isDark ? "bg-black opacity-70" : "bg-black opacity-30"}`}
        onClick={() => !clickStrict && handleCancel()}
      />

      <div
        className={`relative rounded-lg p-6 shadow-lg z-10 w-80 max-w-full ${
          isDark ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"
        }`}
      >
        <button
          className={`absolute top-2 right-2 cursor-pointer ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={handleCancel}
        >
          ✕
        </button>

        <div className="text-center">
          <p className="mb-4">{message}</p>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`border rounded p-2 w-full mb-4 ${
              isDark
                ? "bg-neutral-700 text-white border-neutral-600"
                : "bg-white text-neutral-800 border-neutral-300"
            }`}
          />

          <div className="flex justify-center gap-4">
            <button
              className={`px-4 py-2 rounded cursor-pointer ${
                isDark ? "bg-green-600 hover:bg-green-700" : "bg-green-500 hover:bg-green-600"
              } text-white`}
              onClick={handleConfirm}
            >
              Confirm
            </button>

            <button
              className={`px-4 py-2 rounded cursor-pointer ${
                isDark ? "bg-red-600 hover:bg-red-700" : "bg-red-500 hover:bg-red-600"
              } text-white`}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
