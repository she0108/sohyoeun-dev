import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface ImageBlockProps {
  children: ImageBlockObjectResponse;
}

export default function ImageBlock({ children }: ImageBlockProps) {
  let url = "";

  switch (children.image.type) {
    case "external":
      url = children.image.external.url;
      break;
    case "file":
      url = children.image.file.url;
  }

  return <img src={url} alt="image" />;
}
