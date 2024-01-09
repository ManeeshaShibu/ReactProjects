import React from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
const Download = ({ targetRef, fileName }) => {
  const handleDownload = async () => {
    const targetElement = targetRef.current;
 
    if (!targetElement) return;
 
    const canvas = await html2canvas(targetElement);
    canvas.toBlob((blob) => {
      saveAs(blob, `${fileName}.png`);
    });
  };
  return (
    <div>
      <button onClick={handleDownload} className="download-button">
        <DownloadForOfflineRoundedIcon className="download-icon" />
      </button>
    </div>
  );
};
 
export default Download;