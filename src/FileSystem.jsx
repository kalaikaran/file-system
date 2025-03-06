import { useState } from "react";

const File = ({ name }) => <li>{name}</li>;

const Folder = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <div
        onClick={() => setIsOpen(!isOpen)}
      >
        {data.name}
      </div>
      {isOpen && data.children && (
        <ul>
          {data.children.map((item, index) =>
            Array.isArray(item.children) ? (
              <Folder key={index} data={item} />
            ) : (
              <File key={index} name={item.name} />
            )
          )}
        </ul>
      )}
    </li>
  );
};

export const FileSystem = ({ files }) => {
  return (
    <ul>
      {files.map((item, index) =>
        Array.isArray(item.children) ? (
          <Folder key={index} data={item} />
        ) : (
          <File key={index} name={item.name} />
        )
      )}
    </ul>
  );
};
