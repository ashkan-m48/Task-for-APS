"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import CTable from "./Table";

function Dropzone() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    if (acceptedFiles) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);
  console.log(files);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "600px",
        width: "100%",

        justifyContent: "space-evenly",
        alignItems: "flex-start",

        padding: "30px",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "dotted black 3px",
            minWidth: "10rem",
            height: "10rem",
            padding: "30px",
            marginRight: "5px",
            fontSize: "20pt",
            fontWeight: "700",
            textAlign: "center",
          }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>
              Drag and drop some files here <br />
              or click to select files
            </p>
          )}
        </div>
      </div>

      <div
        style={{ width: "1px", height: "100%", backgroundColor: "black" }}
      ></div>

      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "10px",
        }}
      >
        <CTable files={files} remove={removeFile} setFiles={setFiles} />
      </div>
    </div>
  );
}

export default Dropzone;
