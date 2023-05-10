import { storage } from "../../firebase";

export const savePDF = async (instance: any, companyName: string | null) => {
  const arrayBuffer = await instance.exportPDF();
  return new Promise((resolve, reject) => {
    // Export modified document.
    // Create blob for upload.
    const blob = new Blob([arrayBuffer], { type: "application/pdf" });

    const objectUrl = URL.createObjectURL(blob);
    console.log("objectUrl", objectUrl);

    storage
      .ref(`${companyName}-assign-rights`)
      .put(blob)
      .then(function (snapshot) {
        console.log("Uploaded a blob or file!", snapshot);
        storage
          .ref(`${companyName}-assign-rights`)
          .getDownloadURL()
          .then((url) => {
            resolve(url);
          });
      });
  });
  // Script for download

  //   const a = document.createElement("a");
  //   a.href = objectUrl;
  //   a.style = "display: none";
  //   a.download = fileName;
  //   document.body.appendChild(a);
  //   a.click();
  //   URL.revokeObjectURL(objectUrl);
  //   document.body.removeChild(a);
};
