import { useCallback, useState } from "react";
import { Ttodo } from "../types/Todo";
import { Popup } from "../components/Popup";

export const useModalWindow = () => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [contentModal, setContentModal] = useState<JSX.Element | null>(null);

  const handleOpenPopup = useCallback(
    (content: JSX.Element) => {
      setContentModal(content);
      setPopupOpen(true);
    },
    [popupOpen]
  );

  const handleClosePopup = useCallback(() => {
    setPopupOpen(false);
  }, [popupOpen]);

  const Modal = () => {
    return popupOpen ? (
      <Popup onClose={handleClosePopup}> {contentModal} </Popup>
    ) : null;
  };
  
  return {
    handleOpenPopup,
    Modal,
  };
};
